import React, { useContext, useEffect, useRef, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text } from "react-native-elements";
import { Context as MusicContext } from "../context/MusicContext";

import Slider from "@react-native-community/slider";
import classicalSongs from "../models/classicalSongs";

const MusicShowcase = () => {
  const { state } = useContext(MusicContext);

  let color = "#FFF";

  // const renderSongs = ({ index, item }) => {
  //   return (
  //     <View style={{}}>

  //     </View>
  //   )
  // };

  return (
    <>
      <View>
        {/* <Text style={styles.songTitle}>Currently playing: {state.currentTrack}</Text> */}
        {/* <FlatList
          data={classicalSongs}
        /> */}
      </View>
      <View> 
        <Slider 
          style={styles.slider}
          value={10}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor="#FFD369"
          minimumTrackTintColor="#FFD369"
          maximumTrackTintColor="#FFF"
          onSlidingComplete={()=>{}}
        />
        <View style={styles.trackProgress}>
          <Text style={{ color }}>0:00</Text>
          <Text style={{ color }}>3:50</Text>
        </View>
      </View>

    </>
  );
};

const styles = StyleSheet.create({
  songTitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "#EEEEEE"
  },
  slider: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: "row"
  },
  trackProgress: {
    width: 340,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default MusicShowcase;
