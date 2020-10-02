import { drawTile } from "./drawTile";

export const drawFilledSpots = (ctx, grid, player1, player2) => {
  grid.forEach((row) => {
    row.forEach((column) => {
      if (column.filled) {
        let color = "";

        if (column.filledBy === player1) {
          color = "red";
        } else if (column.filledBy === player2) {
          color = "yellow";
        }

        drawTile(
          ctx,
          column.left,
          column.right,
          column.top,
          column.bottom,
          color
        );
      }
    });
  });
};
