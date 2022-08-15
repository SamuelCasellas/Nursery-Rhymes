import React from "react";
import { createAppContainer } from "react-navigation";

import { createSwitchNavigator } from "react-navigation";
// import currently not working
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";

import { Provider as MusicProvider } from "./src/context/MusicContext";
import { Provider as SettingsProvider } from "./src/context/SettingsContext";

import TitleScreen from "./src/screens/TitleScreen";
import ShowTracksScreen from "./src/screens/ShowTracksScreen";
import PlayMusicScreen from "./src/screens/PlayMusicScreen";
import SMCScreen from "./src/screens/SMCScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

const musicFlow = createStackNavigator({
  ShowTracks: ShowTracksScreen,
  PlayMusic: PlayMusicScreen
});

const mainMenuTabFlow = createBottomTabNavigator({
  musicFlow,
  SMC: SMCScreen,
  Settings: SettingsScreen
});

const switchNavigator = createSwitchNavigator({
  Title: TitleScreen,
  mainMenuTabFlow
}, 
// {
//   initialRouteName: "Title",
//   navigationOptions: {
//     title: "APP_NAME"
//   }
// }
);

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <SettingsProvider>
      <MusicProvider>   
        <App />
      </MusicProvider>
    </SettingsProvider>
  );
};