import React, { useContext } from "react";
import { View, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { Context as SettingsContext} from "../context/SettingsContext";
import checkNightMode from "../hooks/checkNightMode";

const Container = ({ children }) => {
  const { state: { nightMode } } = useContext(SettingsContext);
  let backgroundColor;
  let StatBar;
  checkNightMode(nightMode)
  ? (StatBar = "light-content", backgroundColor="#222831")
  : (StatBar = "dark-content", backgroundColor="white");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
      <StatusBar barStyle={StatBar}/>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Container;
