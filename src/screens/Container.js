import React, { useContext, useEffect } from "react";
import { View, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { Context as SettingsContext} from "../context/SettingsContext";
import checkNightMode from "../hooks/checkNightMode";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Container = ({ children }) => {
  const { state: { nightMode }, changeNightMode } = useContext(SettingsContext);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      const retrieveNightMode = async () => await AsyncStorage.getItem("nightMode");
      retrieveNightMode().then((value) => {
        if (value) {
          changeNightMode(value);
        }
      }, (reject) => console.error(reject, ": Could not retrieve nigthMode from AS."));
    }

    return () => {
      isMounted = false;
    };
  }, []);

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
