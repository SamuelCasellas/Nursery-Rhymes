import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Foundation } from '@expo/vector-icons';
// Buttons with specific formatting
import PlayButton from "./PlayButton";
import RepeatButton from "./RepeatButton";
import ShuffleButton from "./ShuffleButton";
import Constants from "../Constants";
const { width } = Constants();

import { allSongs } from "../models/allSongs";


const MusicPlayerControls = () => {

  return (
    <View style={styles.playControls}>
      <ShuffleButton />
      <TouchableOpacity onPress={() => { } }>
        <Foundation name="previous" size={30} color="#777777" />
      </TouchableOpacity>
      {/* <PlayButton state={playbackState} setState={togglePlayback}/> */}
      <PlayButton />
      <TouchableOpacity onPress={() => { } }>
        <Foundation name="next" size={30} color="#777777" />
      </TouchableOpacity>
      <RepeatButton />
    </View>
  );
};

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

export default MusicPlayerControls;
