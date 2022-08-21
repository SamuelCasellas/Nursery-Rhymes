import React, { useContext } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Text, ListItem } from "react-native-elements";
import Container from "./Container";
import nightColors from "../hooks/nightColors";
import { Context as SettingsContext } from "../context/SettingsContext";
import { Context as MusicContext } from "../context/MusicContext";
import { EvilIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { NavigationEvents } from "react-navigation";
import PlaylistButton from "../components/PlaylistButton";
import MusicPlaylistsInterpretor from "../hooks/MusicPlaylistsInterpretor";
import Constants from "../Constants";
const { width, height } = Constants();

const ViewPlaylistsScreen = ({ navigation }) => {

  const { state: { nightMode } } = useContext(SettingsContext);
  const { textColor, titleBarColor, titleBarTextColor, titleBarButtonColor } = nightColors(nightMode);

  const { state: { listOfPlaylists, playlistBeingEdited }, deletePlaylist, setPlaylist, setEditingPlaylist } = useContext(MusicContext);
  // listOfPlaylists = [ [playlistName, playlistPattern], ... ]

  // TODO: Go to the PlaytMusic Screen with this playlist in the queue.
  const renderSinglePlaylist = ({ item }) => <TouchableOpacity style={styles.singlePlaylist}>
    <Text style={{ marginLeft: 15, fontSize: 20 }}>{item[0]}</Text>
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
        <TouchableOpacity onPress={() => deletePlaylist(item)}>
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
        navigation.navigate("ViewPlaylists", { titleBarColor, titleBarTextColor, titleBarButtonColor })
        if (playlistBeingEdited) {
          setPlaylist("");
        }
        setEditingPlaylist(null);
      }}
      />
    {/* TODO: Not working */}
    {listOfPlaylists
    ? null
    : <Text>No Playlists</Text> 
    }
      <PlaylistButton
        style={styles.plusIcon}
        buttonName="playlist-plus" 
        navTo="CreatePlaylist" 
        color={textColor} />
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
  plusIcon: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginBottom: 10,
    fontStyle: "italic",
    borderRadius: 16,
    borderWidth: 1.5
  },
  singlePlaylist: {
    flexDirection: "row",
    width,
    height: 50,
    borderTopWidth: 1,
    alignItems: "center",
    justifyContent: "space-between"
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
