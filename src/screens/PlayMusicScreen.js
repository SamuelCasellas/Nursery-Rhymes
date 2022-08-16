import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements"
import MusicShowcase from "../components/MusicShowcase";
import MusicPlayerUi from "../components/MusicPlayerUi";
import { Context as SettingsContext } from "../context/SettingsContext";
import timeLogic from "../hooks/timeLogic";
import checkNightMode from "../hooks/checkNightMode";
import Container from "./Container";

const PlayMusicScreen = () => {
  const { isDark, getHourOfDay } = timeLogic();


  const children = <View style={styles.mainContainer}>
      <MusicShowcase />
      <MusicPlayerUi />
      <Text h1>{getHourOfDay()}</Text>
    </View>

    console.log("Other one: ", typeof children);

  return <Container children={children}/>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#222831"
    // Night background color; #222831
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default PlayMusicScreen;
