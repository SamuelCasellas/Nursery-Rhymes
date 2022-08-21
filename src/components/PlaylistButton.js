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
        size={30} 
        color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  playlistButton: {
    marginTop: 10,
    marginRight: 5,
    padding: 10,
    alignSelf: "flex-end"
    // borderRadius: 27,
    // borderWidth: 1.5
  }
});

export default withNavigation(PlaylistButton);
