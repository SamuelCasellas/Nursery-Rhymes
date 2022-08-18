import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Context as MusicContext } from "../context/MusicContext";
import { Context as SettingsContext } from "../context/SettingsContext";
import nightColors from "../hooks/nightColors";

const RepeatButton = () => {
  const { state: { nightMode } } = useContext(SettingsContext);
  const { musicPlayerToggleButton } = nightColors(nightMode);
  
  // const REPEAT_CYCLE = ["play_once", "repeat_play", "repeat_play_single"];
  const { state: { repeatPos }, changeRepeat } = useContext(MusicContext);
  return (
    <View>
      <TouchableOpacity onPress={changeRepeat}>
        { repeatPos % 3 === 0 
          ? <Ionicons style={styles.shadow} name="repeat" size={30} color="#777777" />
          : <Ionicons style={styles.shadow} name="repeat" size={30} color={musicPlayerToggleButton} />
        }
        { repeatPos % 3 === 2
          ? <Text style={{ ...styles.repeat1, color: musicPlayerToggleButton }}>1</Text>
          : null
        }
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  repeat1: {
    position: "absolute",
    marginTop: -5,
    marginLeft: 25,
  }
});

export default RepeatButton;
