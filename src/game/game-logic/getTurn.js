export const getTurn = (
  turnSetting,
  currentGameStartedBy,
  player1,
  player2,
  winner,
  looser
) => {
  let whoStarts = currentGameStartedBy;
  console.log("turnSetting:", turnSetting);
  console.log("currentGameStartedBy:", currentGameStartedBy);
  console.log("player1:", player1);
  console.log("player2:", player2);
  console.log("winner:", winner);
  console.log("looser:", looser);

  switch (turnSetting) {
    case 0:
      whoStarts = currentGameStartedBy === player1 ? player2 : player1;
      console.log("alternate who starts:", whoStarts);
      break;
    case 1:
      whoStarts = looser ? looser : currentGameStartedBy;
      console.log("looser who starts:", whoStarts);
      break;
    case 2:
      whoStarts = winner ? winner : currentGameStartedBy;
      console.log("winner who starts:", whoStarts);
      break;
    case 3:
      whoStarts = player1;
      console.log("always player1 who starts:", whoStarts);
      break;
    case 4:
      whoStarts = player2;
      console.log("player2 who starts:", whoStarts);
      break;
    default:
      whoStarts = currentGameStartedBy;
      console.log("who starts:", whoStarts);
  }

  console.log("who starts:", whoStarts);
  // console.log("player1", player1);
  // console.log("player2", player2);

  return whoStarts;
};
