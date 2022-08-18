import timeLogic from "./timeLogic";

export default (nightMode) => {
  const {isDark} = timeLogic();
  return (isDark() && nightMode === "2") || nightMode === "1";
};