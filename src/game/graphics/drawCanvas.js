import { clearGridBorder } from "./clearGridBorder";
import { createGridBorder } from "./createGridBorder";

export const drawCanvas = (ctx, grid, width, height) => {
  ctx.fillStyle = "#84A4FC";
  ctx.fillRect(0, 0, width, height);
  clearGridBorder(ctx, grid, width, height);
  createGridBorder(ctx, grid, width, height);
};
