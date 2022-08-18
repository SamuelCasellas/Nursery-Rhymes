import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements"

const AdBanner = () => {
  return (
    <View style={styles.adBox}>
      <Text h1>AdBanner</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  adBox: {
    borderWidth: 2,
    borderColor: "red"
  }
});

export default AdBanner;
