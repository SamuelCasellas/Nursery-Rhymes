import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { withNavigation } from "react-navigation";

const PlaylistButton = ({ navigation, buttonName, navTo, color }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navTo)}>
      <MaterialCommunityIcons 
        style={{ ...styles.playlistButton, color }} 
        name={buttonName}
        size={35} 
        color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  playlistButton: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginBottom: 10,
    padding: 10,
    borderRadius: 30,
    borderWidth: 1.5
  }
});

export default withNavigation(PlaylistButton);
