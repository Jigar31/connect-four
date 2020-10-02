export const drawTile = (ctx, left, right, top, bottom, color, tile) => {
  const radius = 15;
  const startAngle = 0;
  const endAngle = Math.PI * 2;

  let x = Math.floor((left + right) / 2);
  let y = Math.floor((top + bottom) / 2);

  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.moveTo(x, y);
  ctx.arc(x, y, radius, startAngle, endAngle, false);
  ctx.fill();
};
