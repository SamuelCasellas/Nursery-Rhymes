import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Context as MusicContext } from "../context/MusicContext";

const MusicShowcase = () => {
  const { state } = useContext(MusicContext);

  return (
    <View>
      <Text h1>Currently playing: {state.currentTrack}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  songTitle: {
    
  }
});

export default MusicShowcase;
