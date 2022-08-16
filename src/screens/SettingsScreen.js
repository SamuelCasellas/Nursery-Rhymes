import React, { useContext, useState } from "react";
import { View, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { Text } from "react-native-elements"
import { Context as SettingsContext } from "../context/SettingsContext";
import DropDownPicker from "react-native-dropdown-picker";
import Container from "./Container";

import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const SettingsScreen = () => {
  
  const { changeNightMode } = useContext(SettingsContext);
  const [open, setOpen] = useState(false);
  // TODO: change this to a useEffect so that there is not a frame that shows that the setting is still select an option
  const [value, setValue] = useState(0);
  const [items, setItems] = useState([
    { label: "Light", value: 0 },
    { label: "Dark", value: 1 },
    { label: "Auto", value: 2 }
  ]);

  const children = (
    <View>
      <Text h1>SettingsScreen</Text>
      <Text h4>Theme:</Text>
      <DropDownPicker
        style={styles.dropdown}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={changeNightMode} />
    </View>
  );

  return (
    <Container children={children} />
  );
};

SettingsScreen.navigationOptions = {
  tabBarIcon: <FontAwesome name="gear" size={24} color="black" />
};

const styles = StyleSheet.create({
  dropdown: {
    width: width * 0.8,
    marginLeft: 15
  }
});

export default SettingsScreen;
