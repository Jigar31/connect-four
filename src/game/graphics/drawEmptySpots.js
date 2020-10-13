import { drawFilledSpots } from "./drawFilledSpots";

export const drawEmptySpots = (
  ctx,
  grid,
  setGrid,
  initialDraw,
  player1,
  player2
) => {
  ctx.beginPath();
  const startAngle = 0;
  const endAngle = Math.PI * 2;

  let radius = 18;
  let margin = 7;

  if (grid.length === 6 && grid[0].length === 7) {
    radius = 20;
    margin = 8;
  } else if (grid.length === 8 && grid[0].length === 8) {
    radius = 23;
    margin = 8;
  }

  let x = radius + margin;
  let y = radius + margin;

  let newGrid;
  if (initialDraw) {
    newGrid = [...grid];
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (initialDraw) {
        newGrid[i][j] = {
          row: i,
          col: j,
          top: 2 * (radius + margin) * i,
          bottom: 2 * (radius + margin) * (i + 1),
          left: 2 * (radius + margin) * j,
          right: 2 * (radius + margin) * (j + 1),
          filled: false,
          filledBy: "",
        };
      }

      let left = x + 2 * (radius + margin) * i;
      let top = y + 2 * (radius + margin) * j;

      ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.arc(top, left, radius, startAngle, endAngle, false);
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.strokeStyle = "white";
      ctx.lineWidth = 2.3;
      ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
      ctx.shadowBlur = 5;
      ctx.shadowOffsetY = 4;

      ctx.arc(top, left, radius + 1, startAngle, endAngle, false);
      ctx.stroke();
      ctx.closePath();

      ctx.lineWidth = 1;
      ctx.shadowColor = "rgba(0, 0, 0, 0)";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
    }
  }

  if (initialDraw) {
    setGrid(newGrid);
  } else {
    drawFilledSpots(ctx, grid, player1, player2);
  }
};
