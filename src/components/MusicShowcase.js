import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Context as MusicContext } from "../context/MusicContext";

// import Slider from "@react-native-community/slider";

const MusicShowcase = () => {
  const { state } = useContext(MusicContext);

  return (
    <>
      <View>
        <Text style={styles.songTitle}>Currently playing: {state.currentTrack}</Text>
      </View>
      <View>
        {/* <Slider /> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  songTitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center"
  },
  slider: {
    width: 350,
    height: 400,
    marginTop: 25,
    flexDirection: "row"
  }
});

export default MusicShowcase;
