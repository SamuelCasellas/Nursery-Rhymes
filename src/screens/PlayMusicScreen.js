import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import MusicShowcase from "../components/MusicShowcase";
import MusicPlayerControls from "../components/MusicPlayerControls";
import { Context as MusicContext } from "../context/MusicContext";
import { Context as SettingsContext } from "../context/SettingsContext";
import nightColors from "../hooks/nightColors";
import Container from "./Container";

const PlayMusicScreen = () => {

  const children = <View style={styles.mainContainer}>
                    <MusicShowcase />
                    <MusicPlayerControls />
                   </View>;

  return <Container children={children}/>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Night background color; #222831
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  }
});

export default PlayMusicScreen;
