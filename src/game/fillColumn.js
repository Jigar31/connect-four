import { dropTile } from "./graphics/dropTile";
import { checkGameWin } from "./game-logic/checkGameWin";
import { highlightTiles } from "./graphics/highlightTiles";

let currentTurnFinished = true;
let columnClick = [];
let currentGamePlayer = "";

export const fillColumn = (
  e,
  ctx,
  canvasGrid,
  grid,
  setGrid,
  player1,
  player2,
  updateScore,
  currentPlayer,
  changePlayer
) => {
  if (currentGamePlayer === "") {
    currentGamePlayer = currentPlayer;
    columnClick = Array(grid.length).fill(grid[0].length);
  }
  console.log("currentPlayer:", currentPlayer);
  if (currentTurnFinished) {
    currentTurnFinished = false;
    let rect = canvasGrid.getBoundingClientRect();
    let x = Math.floor(Math.floor(e.clientX - rect.left));
    // let y = Math.floor(Math.floor(e.clientY - rect.top));

    // console.log('x:', x);
    // console.log('y:', y);

    let selectedColumn;

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        let gridBlock = grid[i][j];

        if (
          x > gridBlock.left + 5 &&
          x < gridBlock.right - 5
          // &&
          // y > gridBlock.top + 5 &&
          // y < gridBlock.bottom - 5
        ) {
          selectedColumn = j;
          break;
        }
      }
    }

    if (selectedColumn > -1 && columnClick[selectedColumn] > 0) {
      let dropAtRow = -1;

      for (let row = grid.length - 1; row > -1; row--) {
        if (!grid[row][selectedColumn].filled) {
          dropAtRow = row;
          break;
        }
      }

      if (dropAtRow > -1) {
        dropTile(
          ctx,
          canvasGrid.width,
          canvasGrid.height,
          grid,
          setGrid,
          player1,
          player2,
          currentGamePlayer,
          columnClick,
          grid[dropAtRow][selectedColumn]
        );

        setTimeout(() => {
          let newGrid = [...grid];

          newGrid[dropAtRow][selectedColumn].filled = true;
          newGrid[dropAtRow][selectedColumn].filledBy = currentGamePlayer;
          setGrid(newGrid);

          let { won, winningTiles } = checkGameWin(
            grid,
            dropAtRow,
            selectedColumn,
            currentGamePlayer
          );
          if (won) {
            highlightTiles(ctx, grid, winningTiles);
            columnClick = Array(grid.length).fill(grid[0].length);

            let winner = currentGamePlayer === player1.name ? player1 : player2;
            let looser = currentGamePlayer === player1.name ? player2 : player1;

            updateScore(winner, looser);
	    currentGamePlayer = "";
          } else {
          	currentGamePlayer =
            		currentGamePlayer === player1.name ? player2.name : player1.name;
          	changePlayer();
	  }

          currentTurnFinished = true;
          columnClick[selectedColumn] -= 1;
        }, 300);
      }
    } else {
      currentTurnFinished = true;
    }
  }
};
