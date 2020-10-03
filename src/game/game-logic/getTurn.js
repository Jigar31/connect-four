export const getTurn = (
  turnSetting,
  currentGameStartedBy,
  player1,
  player2,
  winner,
  looser
) => {
  let whoStarts = currentGameStartedBy;

  switch (turnSetting) {
    case 0:
      whoStarts = currentGameStartedBy === player1 ? player2 : player1;
      break;
    case 1:
      whoStarts = looser ? looser : player1;
      break;
    case 2:
      whoStarts = winner ? winner : player1;
      break;
    case 3:
      whoStarts = player1;
      break;
    case 4:
      whoStarts = player2;
      break;
    default:
      whoStarts = currentGameStartedBy;
  }

  return whoStarts;
};
