import React, { useContext, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Text } from "react-native-elements";
import { Context as SettingsContext } from "../context/SettingsContext";
import { NavigationEvents } from "react-navigation";
import nightColors from "../hooks/nightColors";
import Container from "./Container";

const CreatePlaylistScreen = ({ navigation }) => {
  const { state: { nightMode } } = useContext(SettingsContext);
  const { textColor, titleBarColor, titleBarTextColor, titleBarButtonColor } = nightColors(nightMode);

  const [text, setText] = useState("");

  const children = (
    <View>
      <NavigationEvents
        // Auto-update titleBarColor according to theme
        onWillFocus={() => navigation.navigate("CreatePlaylist", { titleBarColor, titleBarTextColor, titleBarButtonColor })}
      />
      <TextInput 
        style={{...styles.textInput, color: textColor}}
        value={text}
        onChangeText={setText}
        placeholder="Playlist name"
      />
    </View>
  );

  return <Container children={children} />;
};

CreatePlaylistScreen.navigationOptions = ({ navigation }) => {
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
  textInput: {
    fontSize: 20,
    height: 60,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
  }
});

export default CreatePlaylistScreen;
