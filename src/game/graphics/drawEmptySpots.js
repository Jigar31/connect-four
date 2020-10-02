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
  const radius = 21;
  const startAngle = 0;
  const endAngle = Math.PI * 2;

  let x = 45;
  let y = 45;
  let margin = 20;

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
          top: 50 * i + margin,
          bottom: 50 * i + 50 + margin,
          left: 50 * j + margin,
          right: 50 * j + 50 + margin,
          filled: false,
          player: "",
        };
      }

      let left = x + 50 * i;
      let top = y + 50 * j;

      ctx.fillStyle = "white";
      ctx.moveTo(left, top);
      ctx.arc(left, top, radius, startAngle, endAngle, false);
    }
  }
  ctx.fill();

  if (initialDraw) {
    // console.log("grid", grid);
    // console.log("newGrid", newGrid);
    setGrid(newGrid);
  } else {
    drawFilledSpots(ctx, grid, player1, player2);
  }
};
