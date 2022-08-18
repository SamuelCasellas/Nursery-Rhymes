import createDataContent from "./createDataContent";

// reducer

const musicReducer = (state, action) => {
  switch (action.type) {
    case "play_pause":
      return { ...state, playing: !state.playing};
    case "change_repeat":
      return { ...state, repeatPos: state.repeatPos += 1 };
    case "change_shuffle":
      return { ...state, shufflePos: state.shufflePos += 1 };
    case "set_track":
      return { ...state, currentTrackId: action.payload };
    default:
      console.error(`Invalid action type: ${action.type}`);
      return state;
  }
};

// actions

const playPause = (dispatch) => () => {
  dispatch({ type: "play_pause"});
};
const changeRepeat = (dispatch) => () => {
  dispatch({ type: "change_repeat"});
};
const changeShuffle = (dispatch) => () => {
  dispatch({ type: "change_shuffle"});
};
const setTrack = (dispatch) => (newTrack) => {
  dispatch({ type: "set_track", payload: newTrack });
};

// export

export const { Context, Provider } = createDataContent(
  musicReducer,
  { setTrack, playPause, changeRepeat, changeShuffle },
  // initial music state
  { currentTrackId: null, playing: false, repeatPos: 0, shufflePos: 0 }
)