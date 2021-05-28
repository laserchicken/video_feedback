const controls = (updateCamSettings, updateCamPosition) => {
  let state = {
    zoom: 0,
    angle: 0,
    up: 0,
    down: 0,
    left: 0,
    right: 0,
    saturation: 100.0,
    brightness: 100.0,
    contrast: 100.0,
    grayscale: 0.0,
    sepia: 0.0,
    opacity: 100.0,
    inversion: 0.0,
  };

  document.getElementById("saturation").onchange = (e) => {
    state.saturation = parseInt(e.target.value, 10);
    updateCamSettings(state);
  };

  document.getElementById("brightness").onchange = (e) => {
    state.brightness = parseInt(e.target.value, 10);
    updateCamSettings(state);
  };

  document.getElementById("contrast").onchange = (e) => {
    state.contrast = parseInt(e.target.value, 10);
    updateCamSettings(state);
  };

  //document.getElementById("grayscale").value = state.grayscale;
  document.getElementById("grayscale").onchange = (e) => {
    state.grayscale = parseInt(e.target.value, 10);
    updateCamSettings(state);
  };

  document.getElementById("sepia").onchange = (e) => {
    state.sepia = parseInt(e.target.value, 10);
    updateCamSettings(state);
  };

  document.getElementById("opacity").onchange = (e) => {
    state.opacity = parseInt(e.target.value, 10);
    updateCamSettings(state);
  };

  document.getElementById("inversion").onchange = (e) => {
    state.inversion = parseInt(e.target.value, 10);
    updateCamSettings(state);
  };

  document.getElementById("zoomIn").onmousedown = () => {
    state.zoom += 1;
    updateCamPosition(state);
  };

  document.getElementById("zoomOut").onmousedown = () => {
    state.zoom -= 1;
    updateCamPosition(state);
  };

  document.getElementById("rotateClockwise").onmousedown = () => {
    state.angle += 1;
    updateCamPosition(state);
  };

  document.getElementById("rotateCounterClockwise").onmousedown = () => {
    state.angle -= 1;
    updateCamPosition(state);
  };

  document.getElementById("up").onmousedown = () => {
    state.up += 1;
    updateCamPosition(state);
  };

  document.getElementById("down").onmousedown = () => {
    state.down += 1;
    updateCamPosition(state);
  };

  document.getElementById("left").onmousedown = () => {
    state.left += 1;
    updateCamPosition(state);
  };

  document.getElementById("right").onmousedown = () => {
    state.right += 1;
    updateCamPosition(state);
  };

  document.onkeydown = function (e) {
    switch (e.key) {
      case "=":
        state.zoom += 1;
        break;
      case "-":
        state.zoom -= 1;
        break;
      case "[":
        state.angle += 1;
        break;
      case "]":
        state.angle -= 1;
        break;
      case "w":
        state.up += 1;
        break;
      case "s":
        state.down += 1;
        break;
      case "a":
        state.left += 1;
        break;
      case "d":
        state.right += 1;
        break;
    }
    updateCamPosition(state);
  };
};

export default controls;
