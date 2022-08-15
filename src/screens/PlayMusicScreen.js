import React, { useContext } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { Text } from "react-native-elements"
import MusicShowcase from "../components/MusicShowcase";
import MusicPlayerUi from "../components/MusicPlayerUi";
import { Context as SettingsContext } from "../context/SettingsContext";
import timeLogic from "../hooks/timeLogic";
import checkNightMode from "../hooks/checkNightMode";

const PlayMusicScreen = () => {
  const { state: { nightMode } } = useContext(SettingsContext);

  const { isDark, getHourOfDay } = timeLogic();

  let color;
  checkNightMode(nightMode)
  ? color = "#222831"
  : color = "white"

  return (
    <SafeAreaView style={{ ...styles.mainContainer, backgroundColor: color }}>
        <MusicShowcase />
        <MusicPlayerUi />
        <Text h1>{getHourOfDay()}</Text>
    </SafeAreaView>
  );
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
