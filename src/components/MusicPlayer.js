import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import { Foundation } from '@expo/vector-icons';
// Buttons with specific formatting
import PlayButton from "./PlayButton";
import RepeatButton from "./RepeatButton";

// ERROR on import
// import TrackPlayer, {
//   Capability,
//   Event,
//   RepeatMode,
//   State,
//   usePlaybackState,
//   useProgress,
//   useTrackPlayerEvents
// } from "react-native-track-player";

const { width, height } = Dimensions.get("window");

const MusicPlayer = () => (
  <View style={styles.playControls}>
  {/* <Image style={styles.image} source={require("../assets/images/10 Flipped.png")} /> */}
    <TouchableOpacity onPress={() => {}}>
      <Foundation name="previous" size={30} color="#777777" />
    </TouchableOpacity>
    <PlayButton />
    <TouchableOpacity onPress={() => {}}>
      <Foundation name="next" size={30} color="#777777" />
    </TouchableOpacity>
    <RepeatButton />
  </View>
);

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  playControls: {
    borderTopColor: "#393E46",
    borderTopWidth: 1,
    width,
    alignItems: "center",
    justifyContent: "space-around", 
    paddingVertical: 15,
    flexDirection: "row"
  },
  // playControls: {
  //   height: 100,
  //   backgroundColor: "white",
  //   alignItems: "center", 
  //   justifyContent: "center",
  //   flexDirection: "row",
  //   borderColor: "black",
  //   borderWidth: 3,
  //   marginHorizontal: 24,
  //   borderRadius: 8
  // },
});

export default MusicPlayer;
