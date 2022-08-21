import React, { useContext, setState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { Context as MusicContext } from "../context/MusicContext";
import { withNavigation } from "react-navigation";
import MusicPlaylistsInterpretor from "../hooks/MusicPlaylistsInterpretor";


const SingleTrack = ({navigation, track, action, textColor, navigateOn }) => {
  
  const { state: { creatingPlaylist } } = useContext(MusicContext);

  // trackOn: true (navigating from ShowTracksScreen) || false (selecting tracks for playlist)

  const selectSong = (trackId) => {
    navigateOn
    ? (action(trackId), navigation.navigate("PlayMusic"))
    : MusicPlaylistsInterpretor.containsSong(creatingPlaylist, trackId)
      ? null // TODO: ADD CHECKMARK WHEN A SONG IS SELECTED
      : action(MusicPlaylistsInterpretor.createPatternDefaultRep(trackId));
  };

  return (
    <TouchableOpacity style={styles.track} onPress={() => selectSong(track.id)}>
      <Text h4 style={{ color: textColor }}>{track.id}.</Text>
      <Text h4 style={{ color: textColor }}>{track.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  track: {
    borderTopWidth: 1,
    borderTopColor: "black",
    borderBottomColor: "black",
    marginHorizontal: 20,
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default withNavigation(SingleTrack);
