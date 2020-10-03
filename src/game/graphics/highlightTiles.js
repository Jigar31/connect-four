export const highlightTiles = (ctx, grid, tiles) => {
  tiles.forEach((currentTile) => {
    const radius = 23;
    const startAngle = 0;
    const endAngle = Math.PI * 2;

    let tile = grid[currentTile.row][currentTile.column];

    let x = Math.floor((tile.left + tile.right) / 2);
    let y = Math.floor((tile.top + tile.bottom) / 2);

    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, false);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "yellow";
    ctx.stroke();
  });
};
