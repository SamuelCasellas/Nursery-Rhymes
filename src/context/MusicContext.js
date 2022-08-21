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
    case "add_playlist":
      return { ...state, listOfPlaylists: [...state.listOfPlaylists, action.payload], creatingPlaylist: "" };
    case "delete_playlist":
      return { ...state, listOfPlaylists: state.listOfPlaylists.filter((playlist) => playlist[0] !== action.payload[0]) };
    case "add_song_to_playlist":
      return { ...state, creatingPlaylist: state.creatingPlaylist += action.payload };
    case "set_playlist":
      return { ...state, creatingPlaylist: action.payload }
    case "set_initial_playlist":
      return { ...state, playlistBeingEdited: action.payload }
    default:
      console.error(`Invalid action type: ${action.type}`);
      return state;
  }
};

// actions

const setTrack = (dispatch) => (newTrack) => {
  dispatch({ type: "set_track", payload: newTrack });
};
const playPause = (dispatch) => () => {
  dispatch({ type: "play_pause"});
};
const changeRepeat = (dispatch) => () => {
  dispatch({ type: "change_repeat"});
};
const changeShuffle = (dispatch) => () => {
  dispatch({ type: "change_shuffle"});
};
const addPlaylist = (dispatch) => (playlist) => {
  dispatch({ type: "add_playlist", payload: playlist });
};
const deletePlaylist = (dispatch) => (playlist) => {
  dispatch({ type: "delete_playlist", payload: playlist });
};

const addSongToPlaylist = (dispatch) => (songPattern) => {
  dispatch({ type: "add_song_to_playlist", payload: songPattern });
};

const setPlaylist = (dispatch) => (songPattern) => {
  dispatch({ type: "set_playlist", payload: songPattern });
};
const setEditingPlaylist = (dispatch) => (playlist) => {
  dispatch({ type: "set_initial_playlist", payload: playlist});
};

// export

export const { Context, Provider } = createDataContent(
  musicReducer,
  { setTrack, playPause, changeRepeat, changeShuffle, addPlaylist, addSongToPlaylist, setPlaylist, deletePlaylist, setEditingPlaylist },
  // initial music state
  { currentTrackId: null, playing: false, repeatPos: 0, shufflePos: 0, listOfPlaylists: [], creatingPlaylist: "", currentPlaylist: 0, currentStepper: 0, playlistBeingEdited: null }
)