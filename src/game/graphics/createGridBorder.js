export const createGridBorder = (ctx, grid, width, height) => {
  let emptySpotRadius = 18;
  let margin = 7;
  let dx = 11;
  let dy = 11;

  if (grid[0].length === 7) {
    emptySpotRadius = 20;
    margin = 8;
    dx = 13;
    dy = 11;
  } else if (grid[0].length === 8) {
    emptySpotRadius = 23.05;
    margin = 8;
    dx = 15;
    dy = 15;
  }

  let outerRadius = emptySpotRadius + margin;
  let x = emptySpotRadius + margin;
  let y = emptySpotRadius + margin;
  ctx.strokeStyle = "white";
  ctx.lineWidth = 3;
  ctx.shadowColor = "";

  //top left
  ctx.beginPath();
  ctx.arc(x, y, outerRadius, Math.PI * 0.8, Math.PI * 1.7, false);
  ctx.stroke();
  ctx.closePath();

  // bottom left
  ctx.beginPath();
  ctx.arc(x * dx, y, outerRadius, Math.PI * 1.3, Math.PI * 0.2, false);
  ctx.stroke();
  ctx.closePath();

  // bottom left
  ctx.beginPath();
  ctx.arc(x, y * dy, outerRadius, Math.PI * 0.3, Math.PI * 1.2, false);
  ctx.stroke();
  ctx.closePath();

  // bottom left
  ctx.beginPath();
  ctx.arc(x * dx, y * dy, outerRadius, Math.PI * 1.8, Math.PI * 0.7, false);
  ctx.stroke();
  ctx.closePath();

  ctx.lineWidth = 2.4;
  for (let i = 1; i < grid.length - 1; i++) {
    ctx.beginPath();
    ctx.arc(
      x,
      y * (2 * i + 1),
      outerRadius,
      Math.PI * 0.8,
      Math.PI * 1.2,
      false
    );
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(
      x * dx,
      y * (2 * i + 1),
      outerRadius,
      Math.PI * 1.8,
      Math.PI * 0.2,
      false
    );
    ctx.stroke();
    ctx.closePath();
  }

  for (let i = 1; i < grid[0].length - 1; i++) {
    ctx.beginPath();
    ctx.arc(
      x * (2 * i + 1),
      y,
      outerRadius,
      Math.PI * 1.3,
      Math.PI * 1.7,
      false
    );
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(
      x * (2 * i + 1),
      y * dy,
      outerRadius,
      Math.PI * 0.3,
      Math.PI * 0.7,
      false
    );
    ctx.stroke();
    ctx.closePath();
  }
};
