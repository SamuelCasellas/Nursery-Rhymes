import checkNightMode from "./checkNightMode";

export default (nightMode) => {

  let textColor;
  let musicPlayerToggleButton;
  let maxTrackTintColor;
  let itemDropdownColor;
  let backGroundColor;
  let scrollerColor;

  checkNightMode(nightMode)
  ? (textColor = "white", musicPlayerToggleButton = "yellow", maxTrackTintColor = "gray")
  : (textColor = "black", musicPlayerToggleButton = "blue", maxTrackTintColor = "lightgray");


  return { textColor, musicPlayerToggleButton, maxTrackTintColor };
}