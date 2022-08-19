import React, { Children, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import Container from "./Container";
import nightColors from "../hooks/nightColors";
import { Context as SettingsContext } from "../context/SettingsContext";
import { NavigationEvents } from "react-navigation";
import PlaylistButton from "../components/PlaylistButton";

const ViewPlaylistsScreen = ({ navigation }) => {

  const { state: { nightMode } } = useContext(SettingsContext);
  const { textColor, titleBarColor, titleBarTextColor, titleBarButtonColor } = nightColors(nightMode);

  const children = <View>
      <NavigationEvents
        // Auto-update titleBarColor according to theme
        onWillFocus={() => navigation.navigate("ViewPlaylists", { titleBarColor, titleBarTextColor, titleBarButtonColor })}
      />
      <PlaylistButton buttonName="playlist-plus" navTo="CreatePlaylist" color={textColor} />
    </View>;

return <Container children={children} />;
};

ViewPlaylistsScreen.navigationOptions = ({ navigation }) => {
  const titleBarColor = navigation.getParam("titleBarColor");
  const titleBarTextColor = navigation.getParam("titleBarTextColor");
  const titleBarButtonColor = navigation.getParam("titleBarButtonColor");
  
  let settingsObject = {
    headerStyle: {
    backgroundColor: titleBarColor
    },
    headerTitleStyle: {
      color: titleBarTextColor
    }
  };

  return titleBarButtonColor 
  ? {...settingsObject, headerTintColor: titleBarButtonColor}
  : settingsObject;
};

const styles = StyleSheet.create({
  plusIcon: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginBottom: 10,
    fontStyle: "italic",
    borderRadius: 16,
    borderWidth: 1.5
  }
});

export default ViewPlaylistsScreen;
