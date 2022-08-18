import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Context as MusicContext } from "../context/MusicContext";
import { Context as SettingsContext } from "../context/SettingsContext";
import nightColors from "../hooks/nightColors";

const ShuffleButton = () => {
  const { state: { nightMode } } = useContext(SettingsContext);
  const { musicPlayerToggleButton } = nightColors(nightMode);
  
  // const SHUFFLE_CYCLE = ["off", "on"];
  const { state: { shufflePos }, changeShuffle } = useContext(MusicContext);
  return (
    <View>
      <TouchableOpacity onPress={changeShuffle}>
        { shufflePos % 2 === 0 
          ? <Ionicons style={styles.shadow} name="shuffle" size={30} color="#777777" />
          : <Ionicons style={styles.shadow} name="shuffle" size={30} color={musicPlayerToggleButton} />
        }
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShuffleButton;
