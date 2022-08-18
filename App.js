import React from "react";
import { createAppContainer } from "react-navigation";

// Using React Navigation v.4 in line with Udemy tutorial
import { createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import { Provider as MusicProvider } from "./src/context/MusicContext";
import { Provider as SettingsProvider } from "./src/context/SettingsContext";

import TitleScreen from "./src/screens/TitleScreen";

import ShowTracksScreen from "./src/screens/ShowTracksScreen";
import CreatePlaylistScreen from "./src/screens/CreatePlaylistScreen";
import PlayMusicScreen from "./src/screens/PlayMusicScreen";

import SMCScreen from "./src/screens/SMCScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

import { Ionicons } from '@expo/vector-icons';

const musicFlow = createStackNavigator({
  ShowTracks: ShowTracksScreen,
  CreatePlaylist: CreatePlaylistScreen,
  PlayMusic: PlayMusicScreen
});

musicFlow.navigationOptions = {
  title: "Music",
  tabBarIcon: <Ionicons name="musical-notes" size={24} color="black" />
};

const mainMenuTabFlow = createBottomTabNavigator({
  musicFlow,
  SMC: SMCScreen,
  Settings: SettingsScreen
});

// const drawer = createDrawerNavigator({

// });

const switchNavigator = createSwitchNavigator({
  Title: TitleScreen,
  mainMenuTabFlow
}, 
{
  initialRouteName: "Title",
  navigationOptions: {
    title: "APP_NAME"
  }
}
);

const App = createAppContainer(switchNavigator);

export default () => (
  <SettingsProvider>
    <MusicProvider>
      <App />
    </MusicProvider>
  </SettingsProvider>
);