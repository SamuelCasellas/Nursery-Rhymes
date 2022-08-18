import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import PlayButton from "./PlayButton";
import { withNavigation } from "react-navigation";

// TODO (optional): Add the progress bar at the bottom
// import Slider from "@react-native-community/slider";

const BottomPlayer = ({ navigation, trackName, textColor }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("PlayMusic")}>
      <View style={styles.bottomPlayerContainer}>
        <Text h4 style={{ color: textColor }}>{trackName}</Text>
        <PlayButton />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bottomPlayerContainer: {
    height: 75,
    borderTopWidth: 1,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default withNavigation(BottomPlayer);
