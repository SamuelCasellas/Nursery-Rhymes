import React, { useContext, setState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { Context as MusicContext } from "../context/MusicContext";
import { withNavigation } from "react-navigation";
import MusicPlaylistsInterpretor from "../hooks/MusicPlaylistsInterpretor";


const SingleTrack = ({navigation, track, action, textColor, navigateOn }) => {
  
  const { state: { creatingPlaylist } } = useContext(MusicContext);

  let opacity;
  let activeOpacity;
  MusicPlaylistsInterpretor.containsSong(creatingPlaylist, track.id) 
  && !navigateOn
  ? (opacity = 0.3, activeOpacity = 1 )
  : (opacity = 1, activeOpacity = 0.2 )

  // trackOn: true (navigating from ShowTracksScreen) || false (selecting tracks for playlist)

  const selectSong = (trackId) => {
    navigateOn
    ? (action(trackId), navigation.navigate("PlayMusic"))
      // For creating playlists
    : opacity === 0.3
      ? null
      : action(MusicPlaylistsInterpretor.createPatternDefaultRep(trackId));
  };

  return (
    <TouchableOpacity activeOpacity={activeOpacity} style={styles.track} onPress={() => selectSong(track.id)}>
      <Text h4 style={{ color: textColor, opacity }}>{track.id}.</Text>
      <Text h4 style={{ color: textColor, opacity }}>{track.title}</Text>
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
