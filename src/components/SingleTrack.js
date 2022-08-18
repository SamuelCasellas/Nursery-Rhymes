import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { withNavigation } from "react-navigation";

const SingleTrack = ({navigation, index, track, action, textColor}) => {

  const selectSong = (trackId) => {
    action(trackId);
    navigation.navigate("PlayMusic");
  };

  return (
    <TouchableOpacity style={styles.track} onPress={() => selectSong(track.id)}>
      <Text h4 style={{ color: textColor }}>{index+1}.</Text>
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
    justifyContent: "space-between"

  }
});

export default withNavigation(SingleTrack);
