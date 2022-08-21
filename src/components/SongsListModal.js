import React, { useContext, Suspense } from "react";
import { View, StyleSheet, Modal, SafeAreaView, Pressable } from "react-native";
import { Text } from "react-native-elements";
// import MusicList from "../components/MusicList";
import { allSongs } from "../models/allSongs";
import { AntDesign } from '@expo/vector-icons';
import Constants from "../Constants";
const { width, height } = Constants();

const SongsListModal = ({ modalVisible, setModalVisible, addSongToPlaylist, textColor, backgroundColor}) => {
  const MusicList = React.lazy(() => import("../components/MusicList"));
  
  // let musicSelected;
  // creatingPlaylist.includes(MusicPlaylistsInterpretor.createPattern(trackDet[0]))
  // ? 
  // : 

  return <Modal
    style={styles.modal}
    animationType="slide"
    transparent={false}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(!modalVisible);
    }}
    >
      <View style={styles.musicListPopup}>
        <Pressable
          style={styles.button}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <AntDesign name="closecircleo" size={24} color="black" />
        </Pressable>
        <Suspense fallback={<Text>Loading...</Text>}>
          <MusicList
            songs={allSongs} 
            action={addSongToPlaylist} 
            textColor={textColor} 
            backgroundColor={backgroundColor} 
            navigateOn={false} />
        </Suspense>
        <View style={{ justifyContent: "flex-end" }}>
          <Text h1 style={{ color: backgroundColor }}>.</Text>
        </View>
      </View>
    </Modal>;
};

const styles = StyleSheet.create({
  modal: {
    //marginTop: -10,
  },
  musicListPopup: {
    borderTopWidth: 2,
    maxHeight: height,
    marginVertical: 20,
  },
  button: {
    alignSelf: "center",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
});

export default SongsListModal;
