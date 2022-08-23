import React, { useContext, useEffect } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Container from "./Container";
import nightColors from "../hooks/nightColors";
import { Context as SettingsContext } from "../context/SettingsContext";
import { Context as MusicContext } from "../context/MusicContext";
import { EvilIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { NavigationEvents } from "react-navigation";
import PlaylistButton from "../components/PlaylistButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ViewPlaylistsScreen = ({ navigation }) => {

  const { state: { nightMode } } = useContext(SettingsContext);
  const { textColor, titleBarColor, titleBarTextColor, titleBarButtonColor } = nightColors(nightMode);

  const { 
    state: { listOfPlaylists, 
      playlistBeingEdited }, 
    deletePlaylist, 
    setPlaylist, 
    setEditingPlaylist,
    retrieveASPlaylists } = useContext(MusicContext);
  // listOfPlaylists = [ [playlistName, playlistPattern], ... ]

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      const retrievePlaylists = async () => JSON.parse(await AsyncStorage.getItem("playlists"));
      retrievePlaylists().then((value) => {
        if (value) {
          retrieveASPlaylists(value);
        }
      }, (reject) => console.error(reject, ": Could not retrieve playlists from AS."));
    }
    return () => {
      isMounted = false;
    };
  }, [ ]);

  let playlistsMessage;
  
  listOfPlaylists.length
  ? playlistsMessage = "Playlists:"
  : playlistsMessage = "No playlists";

  // TODO: Go to the PlaytMusic Screen with this playlist in the queue.
  const renderSinglePlaylist = ({ item, index }) => <TouchableOpacity style={styles.singlePlaylist}>
    <Text numberOfLines={1} style={styles.playlistTitle}>
      {index+1}.{"\t"}{item[0]}
    </Text>
    <View style={styles.rowElement}>
      <View style={styles.rowElement}>
        <TouchableOpacity onPress={() => {
          // For reference at termination of editing
          setEditingPlaylist(item);
          // Chosen playlist songs embedded: useContext
          setPlaylist(item[1]);
          // title uses local state
          navigation.navigate("CreatePlaylist", {item});
        }}>
          <EvilIcons style={styles.playlistIcons} name="pencil" size={36} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={async () => {
          deletePlaylist(item);
          try {
            await AsyncStorage.setItem("playlists", JSON.stringify(
              listOfPlaylists
              .filter((p) => p[0] !== item[0])))
              .catch((rej) => console.error(rej, "could not store playlists in AS"))
          } catch (err) {
            console.error(err, "could not store playlists in AS");
            }
          }}>
          <EvilIcons style={styles.playlistIcons} name="trash" size={36} color="black" />
        </TouchableOpacity>
      </View>
      <Octicons style={styles.playlistIcons} name="chevron-right" size={26} color="black" />
    </View>
  </TouchableOpacity>;

  const children = <>
    <NavigationEvents
      // Auto-update titleBarColor according to theme
      onWillFocus={() => {
        navigation.navigate("ViewPlaylists", 
          { titleBarColor, 
            titleBarTextColor, 
            titleBarButtonColor });
        // TODO: Check if needed
        if (playlistBeingEdited) {
          setPlaylist("");
        }
        setEditingPlaylist(null);
      }}
      />
    <View style={[styles.singlePlaylist, 
      { height: null, borderTopWidth: null }]}>
      <Text h2 style={styles.noPlaylists}>{playlistsMessage}</Text>
      <PlaylistButton
        buttonName="playlist-plus" 
        navTo="CreatePlaylist" 
        color={textColor} />
    </View>
      <FlatList 
        data={listOfPlaylists}
        keyExtractor={(item) => item[0]}
        renderItem={renderSinglePlaylist}
      />
    </>;

  return <Container children={children} />;
};

ViewPlaylistsScreen.navigationOptions = ({ navigation }) => {
  const titleBarColor = navigation.getParam("titleBarColor");
  const titleBarTextColor = navigation.getParam("titleBarTextColor");
  const titleBarButtonColor = navigation.getParam("titleBarButtonColor");
  
  let settingsObject = {
    headerStyle: {
    backgroundColor: titleBarColor
    },
    headerTitleStyle: {
      color: titleBarTextColor
    }
  };

  return titleBarButtonColor 
  ? {...settingsObject, headerTintColor: titleBarButtonColor}
  : settingsObject;
};

const styles = StyleSheet.create({
  noPlaylists: { 
    marginLeft: 15, 
    marginTop: 5, 
    fontStyle: "italic" 
  },
  singlePlaylist: {
    flexDirection: "row",
    height: 50,
    borderTopWidth: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  playlistTitle: {
    marginLeft: 15, 
    fontSize: 20, 
    flex: 1
  },
  playlistIcons: {
    marginHorizontal: 5,
  },
  rowElement: { 
    flexDirection: "row", 
    marginRight: 15 
  }
});

export default ViewPlaylistsScreen;
