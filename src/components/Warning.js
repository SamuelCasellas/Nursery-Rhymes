import React, { useContext } from "react";
import { View, StyleSheet, Modal, Pressable } from "react-native";
import { Text } from "react-native-elements";
import { Entypo } from '@expo/vector-icons';

const Warning = ({ state, setState, warningText }) => {

  return <View style={styles.centerView}>
    <Modal
    animationType="slide"
    transparent={true}
    visible={state}
    onRequestClose={() => {
      setState(!state);
    }}
    >
      <View style={styles.centerView}>
        <View style={styles.warningView}>
        <Text style={styles.modalText}>{warningText}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setState(!state)}
          >
            <Entypo name="check" size={24} color="white" />
          </Pressable>
        </View>
      </View>
    </Modal>
  </View>

};

const styles = StyleSheet.create({
  warningView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 20
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 30,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
});

export default Warning;
