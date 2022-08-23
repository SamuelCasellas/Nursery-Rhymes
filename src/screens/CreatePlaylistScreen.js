import React, { useContext, useState, useMemo, useEffect } from "react";
import { View, StyleSheet, TextInput, Pressable, FlatList, TouchableOpacity } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as SettingsContext } from "../context/SettingsContext";
import { Context as MusicContext } from "../context/MusicContext";
import MusicPlaylistsInterpretor from "../hooks/MusicPlaylistsInterpretor";
import nightColors from "../hooks/nightColors";
import Container from "./Container";
import SongsListModal from "../components/SongsListModal";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

import PlaylistSingleTrack from "../components/PlaylistSingleTrack";

import Warning from "../components/Warning";

const CreatePlaylistScreen = ({ navigation }) => {
  const [sameNameWarning, sameNameWarningVisible] = useState(false);
  const [noSongsWarning, noSongsWarningVisible] = useState(false);
  const [missingRepeatWarning, missingRepeatWarningVisible] = useState(false);

  const { state: { nightMode } } = useContext(SettingsContext);
  const { textColor, 
    titleBarColor, 
    titleBarTextColor, 
    titleBarButtonColor,
    backgroundColor } = nightColors(nightMode);

  // Main focus of state
  const { 
    state: { listOfPlaylists, 
      creatingPlaylist, 
      playlistBeingEdited,
      savedNewPlaylist }, 
    addSongToPlaylist, 
    addPlaylist, 
    deletePlaylist, 
    setPlaylist,
    setEditingPlaylist,
    setNewPlaylist } = useContext(MusicContext);

  const editing = navigation.getParam("item");

  const [playlistTitle, setPlaylistTitle] = useState(() => {
    return editing
    ? editing[0]
    : savedNewPlaylist[0];
  });

  if (!editing) {
    useEffect(() => {
      let isMounted = true;
      if (isMounted) {
        // Read save state
        setPlaylist(savedNewPlaylist[1]);
      }
      return () => {
        isMounted = false;
      };
    }, [ ]);

    useEffect(() => {
      let isMounted = true;
      if (isMounted) {
        // Save changes
        setNewPlaylist([playlistTitle, creatingPlaylist]);
      }
      return () => {
        isMounted = false;
      };
    }, [playlistTitle, creatingPlaylist]);
  }


  /**
   * 
   * @returns {boolean}
   */
  const hasSameName = () => {
    if (playlistBeingEdited) {
      // do not include the editing playlist so 
      // the user can keep the same name if desired.
      return listOfPlaylists
        .filter((p) => p[0] !== playlistBeingEdited[0])
        .map((p) => p[0])
        .includes(playlistTitle);
    }
    return listOfPlaylists
      .map((p) => p[0])
      .includes(playlistTitle);
  };

  const submitLogic = async () => {
    if (!creatingPlaylist) {
      noSongsWarningVisible(!noSongsWarning);
    }
    else if (creatingPlaylist.includes("xs") || creatingPlaylist.endsWith("x")) {
      missingRepeatWarningVisible(!missingRepeatWarning);
    }
    else if (hasSameName() || !playlistTitle) {
      sameNameWarningVisible(!sameNameWarning);
    } else {
      if (playlistBeingEdited) {
        deletePlaylist(playlistBeingEdited);
      }
      try {
        await AsyncStorage.setItem("playlists", JSON.stringify([...listOfPlaylists, [playlistTitle, creatingPlaylist]]));
      } catch (err) {
        console.error(err, "could not store playlists in AS");
      }
      addPlaylist([playlistTitle, creatingPlaylist]);
      // Clear
      setPlaylistTitle("");
      setPlaylist("");
      setEditingPlaylist(null);
      
      navigation.pop();
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  const playlistFLData = MusicPlaylistsInterpretor.listRepresentation(creatingPlaylist);

  const modalData = {
    modalVisible,
    setModalVisible,
    addSongToPlaylist,
    textColor,
    backgroundColor
  };

  const DisplayModal = useMemo(() => 
    <SongsListModal {...modalData} />
  , [modalVisible]);
  
  const children = (
    <View>
      <NavigationEvents
        // Auto-update titleBarColor according to theme
        onWillFocus={() => navigation.navigate("CreatePlaylist", { titleBarColor, titleBarTextColor, titleBarButtonColor })}
      />
      <Warning state={noSongsWarning} setState={noSongsWarningVisible} warningText="Minimum 1 song needed." />
      <Warning state={sameNameWarning} setState={sameNameWarningVisible} warningText="Please enter a unique name." />
      <Warning state={missingRepeatWarning} setState={missingRepeatWarningVisible} warningText="Repeat number(s) missing." />
      <TextInput 
        style={{...styles.textInput, color: textColor}}
        value={playlistTitle}
        onChangeText={setPlaylistTitle}
        placeholder="Playlist name"
      />
      {DisplayModal}
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Pressable style={{ flexDirection: "row", alignItems: "center" }} onPress={() => setModalVisible(true)}>
          <Ionicons name="ios-musical-notes" size={25} color="black" />
          <Ionicons style={{ marginTop: -20, marginLeft: -4 }} name="ios-add-sharp" size={17} color="black" />
        </Pressable>
        <TouchableOpacity onPress={submitLogic}>
          <MaterialIcons name="playlist-add-check" size={32} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        // Songs must be unique due to key extractor
        style={styles.playlists}
        data={playlistFLData}
        keyExtractor={(key) => key[0]}
        renderItem={({ item }) => 
          <PlaylistSingleTrack trackDet={item} textColor={textColor} />}
      />
    </View>
  );

  return <Container children={children} />;
};

CreatePlaylistScreen.navigationOptions = ({ navigation }) => {
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
  buttonText: {
    fontWeight: "600",
    padding: 4,
    borderColor: "#3060fc",
    borderWidth: 1.75,
    borderRadius: 10,
    shadowColor: "#182f7d",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5
  },
  textInput: {
    fontSize: 20,
    height: 60,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  playlists: {
    height: "80%"
  }
});

export default CreatePlaylistScreen;
