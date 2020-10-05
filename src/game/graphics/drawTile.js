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
  player2,
  columnsInGrid
) => {
  const startAngle = 0;
  const endAngle = Math.PI * 2;
  let radius = 17;
  let x = Math.floor((left + right) / 2);
  let y = Math.floor((top + bottom) / 2);
  let dxImg1 = 11;
  let dyImg1 = 13;
  let dxImg2 = 11;
  let dyImg2 = 13;
  let img1Width = 21;
  let img2Width = 23;
  let img1Height = 25;
  let img2Height = 25;

  if (columnsInGrid === 7) {
    radius = 18;
  } else if (columnsInGrid === 8) {
    radius = 21;
    img1Width = 22;
  }

  let color = "";

  if (currentPlayer === player1) {
    color = "#37AC5D";
    ctx.shadowOffsetX = 1;
    ctx.drawImage(player1Img, x - dxImg1, y - dyImg1, img1Width, img1Height);
  } else if (currentPlayer === player2) {
    color = "#F8D146";
    ctx.shadowOffsetX = 0;
    ctx.drawImage(player2Img, x - dxImg2, y - dyImg2, img2Width, img2Height);
  }

  ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
  ctx.shadowBlur = 3;
  ctx.shadowOffsetY = 2;
  ctx.shadowOffsetX = 1;

  ctx.beginPath();
  ctx.arc(x, y, radius, startAngle, endAngle, false);
  ctx.strokeStyle = color;
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.closePath();

  ctx.shadowColor = "rgba(0, 0, 0, 0)";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;
};
