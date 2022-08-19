import React, { useContext } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { Context as MusicContext } from "../context/MusicContext";
import { Context as SettingsContext } from "../context/SettingsContext";
import PlaylistButton from "../components/PlaylistButton";
import SingleTrack from "../components/SingleTrack";
import BottomPlayer from "../components/BottomPlayer";
import AdBanner from "../components/AdBanner";
import nightColors from "../hooks/nightColors";
import Container from "./Container";
import classicalSongs from "../models/classicalSongs";
import Constants from "../Constants";
const { width, height } = Constants();

import timeLogic from "../hooks/timeLogic";
const { getTimeOfDay } = timeLogic();

const ShowTracksScreen = ({ navigation }) => {
  const { state: { nightMode } } = useContext(SettingsContext);
  const { textColor } = nightColors(nightMode);
  
  const { state: { currentTrackId }, setTrack } = useContext(MusicContext);
  const currentSong = classicalSongs.find((song) => song.id === currentTrackId);

  const children = (
    <>
      <Text h1 style={{ ...styles.greeting, color: textColor }}>Good {getTimeOfDay()}</Text>
      <PlaylistButton buttonName="playlist-music" navTo="ViewPlaylists" color={textColor}/>
      {/* List of songs */}
      <FlatList 
        style={styles.songList}
        keyExtractor={(item) => item.id}
        data={classicalSongs}
        renderItem={({ item, index }) => {
          return <SingleTrack index={index} track={item} action={setTrack} textColor={textColor} />;
        }}
      />
      <View style={styles.bottomView}>
        {currentTrackId
        ? <BottomPlayer trackName={currentSong.title} textColor={textColor}/>
        : null
        }
        <AdBanner />
      </View>
    </>
  );

  return <Container children={children} />;
};

ShowTracksScreen.navigationOptions = () => ({
  headerShown: false,
});

const styles = StyleSheet.create({
  greeting: {
    marginTop: 10,
    marginLeft: 10,
    fontStyle: "italic",
  },
  songList: {
    width
  },
  bottomView: {
    justifyContent: "flex-end",
    height: 100
  }
});

export default ShowTracksScreen;
