import React, { useContext } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import { Context as SettingsContext } from "../context/SettingsContext";
import checkNightMode from "../hooks/checkNightMode";
import { FontAwesome5 } from '@expo/vector-icons';
import Container from "./Container";

const SMCScreen = () => {

  const children = (
    <Text h1>SMCScreen</Text>
  );

  return <Container children={children} />;
};

SMCScreen.navigationOptions = {
  title: "Support My Child",
  tabBarIcon: <FontAwesome5 name="child" size={24} color="black" />
}

const styles = StyleSheet.create({});

export default SMCScreen;
