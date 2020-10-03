import Player1Avatar from "../../assets/two-player/player1-avatar.png";
import Player2Avatar from "../../assets/two-player/player2-avatar.png";

let player1Img = new Image();
player1Img.src = Player1Avatar;

let player2Img = new Image();
player2Img.src = Player2Avatar;

export const drawTile = (
  ctx,
  left,
  right,
  top,
  bottom,
  currentPlayer,
  player1,
  player2
) => {
  const radius = 19;
  const startAngle = 0;
  const endAngle = Math.PI * 2;

  let x = Math.floor((left + right) / 2);
  let y = Math.floor((top + bottom) / 2);
  let color = "";

  if (currentPlayer === player1) {
    color = "#37AC5D";
    ctx.drawImage(player1Img, left + 12, top + 12, 25, 25);
  } else if (currentPlayer === player2) {
    color = "#F8D146";
    ctx.drawImage(player2Img, left + 12, top + 12, 25, 25);
  }
  ctx.beginPath();
  ctx.arc(x, y, radius, startAngle, endAngle, false);
  ctx.strokeStyle = color;
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x, y, radius + 4, startAngle, endAngle, false);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 3;
  ctx.stroke();
};
