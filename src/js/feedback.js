import drawing from "./drawing";
import controls from "./controls";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const width = 800;
const height = 800;
let screenStartX = 190;
let screenStartY = 180;
let screenWidth = 425;
let screenHeight = 400;

let zoom = 0;
let angle = 0;
let up = 0;
let down = 0;
let left = 0;
let right = 0;

const updateCamSettings = ({
  brightness,
  contrast,
  saturation,
  grayscale,
  sepia,
  opacity,
  inversion,
}) => {
  ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) grayscale(${grayscale}%) sepia(${sepia}%) opacity(${opacity}%) invert(${inversion}%)`;
};

const updateCamPostion = (controlsState) => {
  ({ zoom, angle, up, down, left, right } = controlsState);
};

controls(updateCamSettings, updateCamPostion);

drawing.onload = function () {
  ctx.beginPath();

  ctx.drawImage(drawing, 0, 0, width, height);

  ctx.closePath();
  ctx.stroke();

  const video = document.querySelector("#video");
  const stream = canvas.captureStream(30); //TODO : experiment with optional frames-per-second argument
  video.srcObject = stream;

  video.addEventListener("play", () => {
    function rotate() {
      ctx.translate(canvas.width / 2, canvas.height / 2); //translate center
      ctx.rotate(((Math.PI * 2) / 180) * angle); //increment the angle and rotate the image
      ctx.translate(-(canvas.width / 2), -(canvas.height / 2)); //translate back
    }

    function screenDisplay() {
      ctx.save();

      rotate();

      ctx.beginPath();
      ctx.drawImage(
        video,
        screenStartX + right - left + 1 - zoom,
        screenStartY + up - down + 1 - zoom,
        screenWidth - 2 + 2 * zoom,
        screenHeight - 2 + 2 * zoom
      );

      //cover overlapping screen display
      ctx.drawImage(
        drawing,
        0 + right - left - zoom,
        0 + up - down - zoom,
        width + 2 * zoom,
        height + 2 * zoom
      );

      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }

    function step() {
      screenDisplay();
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
};
