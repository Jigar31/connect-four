import { drawTile } from "./drawTile";

export const drawFilledSpots = (ctx, grid, player1, player2) => {
  grid.forEach((row) => {
    row.forEach((column) => {
      if (column.filled) {
        drawTile(
          ctx,
          column.left,
          column.right,
          column.top,
          column.bottom,
          column.filledBy,
          player1,
          player2,
          grid[0].length
        );
      }
    });
  });
};
