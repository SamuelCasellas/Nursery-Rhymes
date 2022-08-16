import React, { useContext } from "react";
import { View, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { Text } from "react-native-elements";
import { Context as SettingsContext } from "../context/SettingsContext";
import checkNightMode from "../hooks/checkNightMode";
import classicalSongs from "../models/classicalSongs";
import Container from "./Container";

const ShowTracksScreen = () => {
  const children = (
    <View>
      <Text h1>ShowTracksScreen</Text>
      <FlatList 
        style={styles.songList}
      />
    </View>
  );
  return <Container children={children} />;
};

const styles = StyleSheet.create({
  songList: {
    
  }
});

export default ShowTracksScreen;
