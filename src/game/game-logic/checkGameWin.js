const getTileInfoInDirection = (grid, row, col, player, direction) => {
  if (!direction.end) {
    let newCount = getPlayerTileCount(grid, row, col, player, direction.count);

    if (newCount > direction.count) {
      direction.count = newCount;
      direction.tiles.push({ row, col });
    } else {
      direction.end = true;
    }
  }
  return direction;
};

const getPlayerTileCount = (grid, row, col, player, count) => {
  if (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length) {
    let tile = grid[row][col];
    count = tile.filledBy === player ? count + 1 : count;
  }

  return count;
};

export const checkGameWin = (grid, row, col, player) => {
  let currentTile = { row, col };
  let horizontal = {
    top: { count: 1, tiles: [currentTile], end: false },
    bottom: { count: 1, tiles: [currentTile], end: false },
    win: false,
  };
  let vertical = {
    top: { count: 1, tiles: [currentTile], end: false },
    bottom: { count: 1, tiles: [currentTile], end: false },
    win: false,
  };
  let diagonalFromLeft = {
    top: { count: 1, tiles: [currentTile], end: false },
    bottom: { count: 1, tiles: [currentTile], end: false },
    win: false,
  };
  let diagonalFromRight = {
    top: { count: 1, tiles: [currentTile], end: false },
    bottom: { count: 1, tiles: [currentTile], end: false },
    win: false,
  };
  let winningTiles = [];
  let won = false;

  for (let i = 1; i <= 3; i++) {
    horizontal.top = getTileInfoInDirection(
      grid,
      row,
      col - i,
      player,
      horizontal.top
    );
    horizontal.bottom = getTileInfoInDirection(
      grid,
      row,
      col + i,
      player,
      horizontal.bottom
    );
    if (horizontal.top.count + horizontal.bottom.count > 4) {
      horizontal.win = true;
    }

    vertical.top = getTileInfoInDirection(
      grid,
      row - i,
      col,
      player,
      vertical.top
    );
    vertical.bottom = getTileInfoInDirection(
      grid,
      row + i,
      col,
      player,
      vertical.bottom
    );
    if (vertical.top.count + vertical.bottom.count > 4) {
      vertical.win = true;
    }

    diagonalFromLeft.top = getTileInfoInDirection(
      grid,
      row - i,
      col - i,
      player,
      diagonalFromLeft.top
    );
    diagonalFromLeft.bottom = getTileInfoInDirection(
      grid,
      row + i,
      col + i,
      player,
      diagonalFromLeft.bottom
    );
    if (diagonalFromLeft.top.count + diagonalFromLeft.bottom.count > 4) {
      diagonalFromLeft.win = true;
    }

    diagonalFromRight.top = getTileInfoInDirection(
      grid,
      row + i,
      col - i,
      player,
      diagonalFromRight.top
    );
    diagonalFromRight.bottom = getTileInfoInDirection(
      grid,
      row - i,
      col + i,
      player,
      diagonalFromRight.bottom
    );
    if (diagonalFromRight.top.count + diagonalFromRight.bottom.count > 4) {
      diagonalFromRight.win = true;
    }
  }

  if (horizontal.win) {
    winningTiles.push(...horizontal.top.tiles, ...horizontal.bottom.tiles);
    won = true;
  }

  if (vertical.win) {
    winningTiles.push(...vertical.top.tiles, ...vertical.bottom.tiles);
    won = true;
  }

  if (diagonalFromLeft.win) {
    winningTiles.push(
      ...diagonalFromLeft.top.tiles,
      ...diagonalFromLeft.bottom.tiles
    );
    won = true;
  }

  if (diagonalFromRight.win) {
    winningTiles.push(
      ...diagonalFromRight.top.tiles,
      ...diagonalFromRight.bottom.tiles
    );
    won = true;
  }

  return { won, winningTiles };
};
