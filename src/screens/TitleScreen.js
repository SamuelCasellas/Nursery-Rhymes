import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements"

const TitleScreen = ({ navigation }) => {

  // Logo animation goes here
  setTimeout(() => {
    navigation.navigate("mainMenuTabFlow");
  }, 1000);

  return (
    <View>
      <Text h1>TitleScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TitleScreen;
