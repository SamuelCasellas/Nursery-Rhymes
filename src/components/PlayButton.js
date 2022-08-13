import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { FontAwesome5 } from '@expo/vector-icons';
import { Context as MusicContext } from "../context/MusicContext";

const PlayButton = () => {
  const width = 20;
  const { state, playPause } = useContext(MusicContext);
  let iconName;
  state.playing ? iconName = "pause" : iconName = "play";

  return (
    <View>
      <FontAwesome5 style={styles.playButton} name={iconName} size={24} color="#777777" />
      <TouchableOpacity 
        style={styles.touchSpace} 
        hitSlop={{top: width, bottom: width+4, left: width, right: width}} 
        onPress={playPause}
      >
        <Text style={{ fontSize: 1 }}>.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  touchSpace: {
    position: "absolute", 
    alignSelf: "center", 
    marginTop: 10,
    // borderWidth: 1,
    // borderColor: "red"
  },
  playButton: {
    // give the play button some nice padding between
    paddingHorizontal: 10,
  }
});

export default PlayButton;
