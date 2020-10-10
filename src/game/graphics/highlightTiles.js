export const highlightTiles = (ctx, grid, tiles) => {
  let radius = 21;
  const startAngle = 0;
  const endAngle = Math.PI * 2;

  if (grid[0].length === 7) {
    radius = 24;
  } else if (grid[0].length === 8) {
    radius = 27;
  }

  tiles.forEach((currentTile, i) => {
    setTimeout(() => {
      let x = Math.floor((currentTile.left + currentTile.right) / 2);
      let y = Math.floor((currentTile.top + currentTile.bottom) / 2);

      ctx.beginPath();
      ctx.arc(x, y, radius, startAngle, endAngle, false);
      ctx.lineWidth = 5;
      ctx.strokeStyle = "yellow";
      ctx.stroke();
    }, 90 * (i + 1));
  });
};
