import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { Text } from "react-native-elements"
import MusicShowcase from "../components/MusicShowcase";
import MusicPlayer from "../components/MusicPlayer";

const PlayMusicScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <MusicShowcase />
        <MusicPlayer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: "#346234"
  },
  mainContainer: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  }
});

export default PlayMusicScreen;
