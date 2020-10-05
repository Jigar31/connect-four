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
  let speed = 20;
  let dy = 2.5;

  if (grid[0].length === 7) {
    dy = 2.5;
  } else if (grid[0].length === 8) {
    speed = 27;
    dy = 2.5;
  }

  const dropTileAnimation = () => {
    count++;
    clearCanvas(ctx, width, height);
    drawCanvas(ctx, grid, width, height);
    drawEmptySpots(ctx, grid, setGrid, false);
    drawFilledSpots(ctx, grid, player1.name, player2.name);

    if (
      columnClick[blockToDropAt.col] !== 0 &&
      count < columnClick[blockToDropAt.col] * dy
    ) {
      // draw tile from top of grid and drop
      drawTile(
        ctx,
        blockToDropAt.left,
        blockToDropAt.right,
        dropTileFrom,
        dropTileFrom + 50,
        currentPlayer,
        player1.name,
        player2.name,
        grid[0].length
      );
      dropTileFrom += speed;

      requestAnimationFrame(dropTileAnimation);
    } else {
      // draw at exact block
      drawTile(
        ctx,
        blockToDropAt.left,
        blockToDropAt.right,
        blockToDropAt.top,
        blockToDropAt.bottom,
        currentPlayer,
        player1.name,
        player2.name,
        grid[0].length
      );

      dropTileFrom = 0;
      count = 0;
    }
  };

  dropTileAnimation();
};
