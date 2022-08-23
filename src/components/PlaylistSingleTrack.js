import React, { useContext, useState } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Text } from "react-native-elements";
import { Context as MusicContext } from "../context/MusicContext";
import { withNavigation } from "react-navigation";
import { EvilIcons } from '@expo/vector-icons';
import { allSongs } from "../models/allSongs";
import MusicPlaylistsInterpretor from "../hooks/MusicPlaylistsInterpretor";

const PlaylistSingleTrack = ({ navigation, trackDet, textColor }) => {
  // trackDet === [s, x]

  const { state: { creatingPlaylist }, setPlaylist } = useContext(MusicContext);

  const [text, setText] = useState(trackDet[1]);
  const song = allSongs.find((song) => +trackDet[0] === song.id);

  const changeTextLogic = (newText) => {
    (newText.match(/^[0-9]+$/) != null || !newText)
    && !newText.startsWith("0")
    ? null 
    : newText = text;
    setText(newText);
    setPlaylist(MusicPlaylistsInterpretor.editSongRep(creatingPlaylist, trackDet, newText));
  }

  return (
    <View style={styles.track}>
      <Text h4 style={{ color: textColor }}>{song.title}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => setPlaylist(MusicPlaylistsInterpretor.deleteSong(creatingPlaylist, trackDet))}>
          <EvilIcons name="trash" size={24} color="black" 
            style={styles.trash}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, marginRight: 5 }}>x</Text>
        <TextInput 
          keyboardType="numeric"
          maxLength={2}
          style={styles.input}
          value={text}
          onChangeText={changeTextLogic}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 5,
    marginLeft: null,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    width: 29,
    marginBottom: -3
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 1,
    //   height: 1
    // },
    // shadowOpacity: 0.30,
  },  
  track: {
    borderTopWidth: 1,
    borderTopColor: "black",
    borderBottomColor: "black",
    marginHorizontal: 20,
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center"
  },
  trash: {
    marginRight: 10
  },
});
//TODO navigation needed?
export default withNavigation(PlaylistSingleTrack);
