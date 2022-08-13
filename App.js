import React from "react";
import { createAppContainer } from "react-navigation";

import { createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";

import { Provider as MusicProvider } from "./src/context/MusicContext";

import TitleScreen from "./src/screens/TitleScreen";
import PlayMusicScreen from "./src/screens/PlayMusicScreen";

const navigator = createStackNavigator({
  Title: TitleScreen,
  Music: PlayMusicScreen
}, {
  initialRouteName: "Music",
  navigationOptions: {
    title: "APP_NAME"
  }
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <MusicProvider>
      <App />
    </MusicProvider>
  );
};