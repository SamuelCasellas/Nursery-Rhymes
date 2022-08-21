import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { Text } from "react-native-elements";
import SingleTrack from "../components/SingleTrack";

const MusicList = ({ songs, action, textColor, backgroundColor, navigateOn }) => {

  const renderSongs = ({ item, index }) => {
    return (index === 0 || index === 11)
    ? <Text style={{ ...styles.category, color: textColor, backgroundColor }}>{item.title}</Text>
    : <SingleTrack track={item} action={action} textColor={textColor} navigateOn={navigateOn} />;
  };

  return <FlatList 
        stickyHeaderIndices={[0,11]}
        style={styles.songList}
        keyExtractor={(item) => item.id}
        data={songs}
        renderItem={renderSongs} />;
};

const styles = StyleSheet.create({
  category: {
    marginLeft: 20,
    paddingBottom: 10,
    fontSize: 20
  },
  songList: {

  },
});

export default MusicList;
