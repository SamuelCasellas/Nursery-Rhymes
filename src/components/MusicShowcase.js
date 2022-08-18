import React, { useContext, useEffect, useRef, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text } from "react-native-elements";
import { Context as MusicContext } from "../context/MusicContext";
import { Context as SettingsContext } from "../context/SettingsContext";
import nightColors from "../hooks/nightColors";

import Slider from "@react-native-community/slider";
import classicalSongs from "../models/classicalSongs";

const MusicShowcase = () => {
  const { state: { currentTrackId } } = useContext(MusicContext);
  const currentTrack = classicalSongs.find((track) => track.id === currentTrackId);

  const { state: { nightMode } } = useContext(SettingsContext);
  const { textColor, maxTrackTintColor } = nightColors(nightMode);

  const songSlider = useRef(null);

  const renderSongs = ({ index, item }) => {
    return (
      <View style={{}}>
        <Text>{item.title}</Text>
      </View>
    )
  };

  return (
    <>
      <View>
        <Text style={{ ...styles.songTitle, color: textColor }}>Currently playing: {currentTrack.title}</Text>
         {/* <FlatList
          data={classicalSongs}
          keyExtractor={(item) => item.id}
          renderItem={renderSongs}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
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
          maximumTrackTintColor={maxTrackTintColor}
          onSlidingComplete={()=>{}}
        />
        <View style={styles.trackProgress}>
          <Text style={{ color: textColor }}>0:00</Text>
          <Text style={{ color: textColor }}>3:50</Text>
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
