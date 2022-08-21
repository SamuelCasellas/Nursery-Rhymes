import React, { useContext, useState, useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Context as MusicContext } from "../context/MusicContext";
import { Context as SettingsContext } from "../context/SettingsContext";
import PlaylistButton from "../components/PlaylistButton";
import MusicList from "../components/MusicList";
import BottomPlayer from "../components/BottomPlayer";
import AdBanner from "../components/AdBanner";
import nightColors from "../hooks/nightColors";
import Container from "./Container";
import Constants from "../Constants";
import { allSongs as songs } from "../models/allSongs"
const { width, height } = Constants();

import timeLogic from "../hooks/timeLogic";
const { getTimeOfDay } = timeLogic();

const ShowTracksScreen = ({ navigation }) => {
  // Created state to reflect memoization. No setter needed as songs will not change.
  const [allSongs, _] = useState(songs);
  const { state: { nightMode } } = useContext(SettingsContext);
  const { textColor, backgroundColor } = nightColors(nightMode);
  
  const { state: { currentTrackId }, setTrack } = useContext(MusicContext);
  const currentSong = allSongs.find((song) => song.id === currentTrackId);

  const SongsList = useMemo(() => 
    <MusicList 
      songs={allSongs} 
      action={setTrack} 
      textColor={textColor} 
      backgroundColor={backgroundColor} 
      navigateOn />, 
  [textColor]);

  const children = (
    <>
      <View style={styles.header}>
        <Text h2 style={{ ...styles.greeting, color: textColor }}>Good {getTimeOfDay()}</Text>
        <PlaylistButton buttonName="playlist-music" navTo="ViewPlaylists" color={textColor}/>
      </View>
      {SongsList}
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
  header: {
    flexDirection: "row", 
    justifyContent: "space-between",
    alignItems: "center"
  },
  greeting: {
    padding: 10,
    marginTop: 5,
    marginLeft: 10,
    fontStyle: "italic",
  },
  bottomView: {
    justifyContent: "flex-end",
  }
});

export default ShowTracksScreen;
