import { clearCanvas } from "./clearCanvas";
import { drawCanvas } from "./drawCanvas";
import { drawEmptySpots } from "./drawEmptySpots";
import { drawFilledSpots } from "./drawFilledSpots";
import { drawTile } from "./drawTile";

export const dropTile = (
  ctx,
  width,
  height,
  grid,
  setGrid,
  player1,
  player2,
  currentPlayer,
  columnClick,
  blockToDropAt
) => {
  let count = 0;
  let dropTileFrom = 0;

  const dropTileAnimation = () => {
    count++;
    let color = "";
    clearCanvas(ctx, width, height);
    drawCanvas(ctx, width, height);
    drawEmptySpots(ctx, grid, setGrid, false);
    drawFilledSpots(ctx, grid, player1, player2);

    if (currentPlayer === player1) {
      color = "red";
    } else if (currentPlayer === player2) {
      color = "yellow";
    }

    if (
      columnClick[blockToDropAt.col] !== 0 &&
      count < columnClick[blockToDropAt.col] * 2.5
    ) {
      // draw tile from top of grid and drop
      drawTile(
        ctx,
        blockToDropAt.left,
        blockToDropAt.right,
        dropTileFrom,
        dropTileFrom + 50,
        color
      );
      dropTileFrom += 20;
      requestAnimationFrame(dropTileAnimation);
    } else {
      // draw at exact block
      drawTile(
        ctx,
        blockToDropAt.left,
        blockToDropAt.right,
        blockToDropAt.top,
        blockToDropAt.bottom,
        color
      );

      dropTileFrom = 0;
      count = 0;
    }
  };

  dropTileAnimation();
};
