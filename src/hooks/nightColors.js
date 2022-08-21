import checkNightMode from "./checkNightMode";

export default (nightMode) => {

  let textColor;
  let musicPlayerToggleButton;
  let maxTrackTintColor;
  let titleBarColor;
  let titleBarTextColor;
  let titleBarButtonColor;
  let itemDropdownColor;
  let backgroundColor;
  let scrollerColor;

  checkNightMode(nightMode)
  ? (textColor = "white", musicPlayerToggleButton = "yellow", maxTrackTintColor = "gray", titleBarColor = "#4e5157", titleBarTextColor = "white", titleBarButtonColor = "lightblue", backgroundColor = "#222831")
  : (textColor = "black", musicPlayerToggleButton = "blue", maxTrackTintColor = "lightgray", titleBarColor = "white", titleBarTextColor = "black", titleBarButtonColor = null, backgroundColor = "white");

  return { textColor, musicPlayerToggleButton, maxTrackTintColor, titleBarColor, titleBarTextColor, titleBarButtonColor, backgroundColor };
};