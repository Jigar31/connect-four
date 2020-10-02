export const getTournamentWinner = (player1, player2, totalGames) => {
  let winner = "";

  if (
    player1.score > Math.floor(totalGames / 2) ||
    player1.score > player2.score
  ) {
    winner = player1.name;
  } else if (
    player2.score > Math.floor(totalGames / 2) ||
    player2.score > player1.score
  ) {
    winner = player2.name;
  }

  return winner;
};
