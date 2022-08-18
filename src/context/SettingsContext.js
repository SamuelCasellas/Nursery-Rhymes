import createDataContent from "./createDataContent";
import AsyncStorage from '@react-native-async-storage/async-storage';

// reducer

const settingsReducer = (state, action) => {
  switch (action.type) {
    case "change_night_mode":
      return { ...state, nightMode: action.payload }
    default:
      console.error(`Invalid action type: ${action.type}`);
      return state;
  }
};

// actions

const changeNightMode = (dispatch) => async (selectedSetting) => {
  try {
    await AsyncStorage.setItem("nightMode", selectedSetting );
  } catch (err) {
    console.error(err, ": Could not store setting for night mode.");
  }
  dispatch({ type: "change_night_mode", payload: selectedSetting });
};

// export

// THIS IS FOR TESTING RIGHT NOW, BUT WE WILL NEED TO STORE THIS DATA LOCALLY

export const { Context, Provider } = createDataContent(
  settingsReducer,
  { changeNightMode },
  // initial settings: nightmode: string (index) = ["off", "on", "auto"] 
  { nightMode: "0", doNotDisturb: false }
);