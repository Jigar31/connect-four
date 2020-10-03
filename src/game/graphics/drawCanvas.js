export const drawCanvas = (ctx, width, height) => {
  ctx.fillStyle = "#84A4FC";
  ctx.shadowOffsetX = -5;
  ctx.shadowOffsetY = 5;
  ctx.shadowBlur = 5;
  ctx.shadowColor = "rgba(130,130,130, 0.5)";
  ctx.fillRect(0, 0, width, height);
};
