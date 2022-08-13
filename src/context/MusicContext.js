import createDataContent from "./createDataContent";

// reducer

const musicReducer = (state, action) => {
  switch (action.type) {
    case "play_pause":
      return { ...state, playing: !state.playing};
    case "change_repeat":
      return { ...state, repeatPos: state.repeatPos += 1 };
    default:
      console.error(`Invalid action type: ${action.type}`);
      return state;
  }
};

// actions

const playPause = (dispatch) => () => {
  dispatch({ type: "play_pause"})
};

const changeRepeat = (dispatch) => () => {
  dispatch({ type: "change_repeat"})
};

// export

export const { Context, Provider } = createDataContent(
  musicReducer,
  { playPause, changeRepeat },
  // initial music state
  { currentTrack: "SAMPLE TRACK", playing: false, repeatPos: 0 }
)