import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements"
import { Context as SettingsContext } from "../context/SettingsContext";
import DropDownPicker from "react-native-dropdown-picker";
import SwitchComp from "../components/SwitchComp";
import Container from "./Container";
import nightColors from "../hooks/nightColors";
import { NavigationEvents } from "react-navigation";
import Constants from "../Constants";

import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Constants();

const SettingsScreen = () => {
  const { state: { nightMode }, changeNightMode, changeDoNotDisturb } = useContext(SettingsContext);
  const { textColor } = nightColors(nightMode);

  // Drop down
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(nightMode);
  const [items, setItems] = useState([
    { label: "Light", value: "0" },
    { label: "Dark", value: "1" },
    { label: "Auto", value: "2" }
  ]);

  const children = (
    <View style={{ marginHorizontal: 15 }}>
      <NavigationEvents
        onDidBlur={() => setOpen(false)}
      />
      <Text h1 style={{ ...styles.text, color: textColor, alignSelf: "center" }}>Settings</Text>
      <Text h4 style={{ ...styles.header, color: textColor }}>Theme:</Text>
      <DropDownPicker
        style={styles.dropdown}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={changeNightMode} />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text h4 style={{ ...styles.header, marginRight: 120 }}>Do not disturb:</Text>
        <SwitchComp action={changeDoNotDisturb} />
      </View>
      <Text style={{ fontStyle: "italic" }}>When activated, advertisements with audio 
        will be silenced. When deactivated, similar ads are played
        only when the app is open and the music is manually paused.</Text>
      <Text h4 style={styles.header}>About source material:</Text>
      <Text style={{ fontStyle: "italic" }}>Lorem Ipsum</Text>
    </View>
  );

  return <Container children={children} />;
};

SettingsScreen.navigationOptions = {
  tabBarIcon: <FontAwesome name="gear" size={24} color="black" />
};

const styles = StyleSheet.create({
  header: {
    marginVertical: 15
  },
  text: {

  },
  dropdown: {
    width: width * 0.8,
    marginLeft: 15
  }
});

export default SettingsScreen;
