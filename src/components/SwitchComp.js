import React, { useState, useEffect } from "react";
import { StyleSheet, Switch } from "react-native";

const SwitchComp = ({ action }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {
    action(isEnabled);
  }, [isEnabled]);

  return <Switch
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />;
};

const styles = StyleSheet.create({});

export default SwitchComp;
