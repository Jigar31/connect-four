export const clearGridBorder = (ctx, grid, width, height) => {
  let emptySpotRadius = 18;
  let margin = 7;
  let dx = 2.4;
  let dy = 2.4;
  let outerRadius = emptySpotRadius + margin;

  if (grid[0].length === 7) {
    emptySpotRadius = 20;
    margin = 8;
    outerRadius = emptySpotRadius + margin;
  } else if (grid[0].length === 8) {
    emptySpotRadius = 23;
    margin = 8;
    dx = 4.4;
    dy = 4.4;
    outerRadius = emptySpotRadius + margin + 13;
  }
  ctx.shadowColor = "";

  let x = emptySpotRadius + margin;
  let y = emptySpotRadius + margin;

  for (let row = 0; row <= grid.length; row++) {
    ctx.beginPath();
    ctx.arc(margin * -dx, y * 2 * row, outerRadius, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(
      width + margin * dx,
      y * 2 * row,
      outerRadius,
      0,
      Math.PI * 2,
      false
    );
    ctx.fillStyle = "white";
    ctx.fill();
  }

  for (let column = 0; column <= grid[0].length; column++) {
    ctx.beginPath();
    ctx.arc(x * 2 * column, margin * -dy, outerRadius, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(
      x * 2 * column,
      height + margin * dy,
      outerRadius,
      0,
      Math.PI * 2,
      false
    );
    ctx.fillStyle = "white";
    ctx.fill();
  }
};
