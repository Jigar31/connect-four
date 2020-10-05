import { drawCanvas } from "./drawCanvas";
import { drawEmptySpots } from "./drawEmptySpots";

export const initializeCanvas = (
  ctx,
  grid,
  setGrid,
  width,
  height,
  initialDraw
) => {
  drawCanvas(ctx, grid, width, height);
  drawEmptySpots(ctx, grid, setGrid, initialDraw);
};
