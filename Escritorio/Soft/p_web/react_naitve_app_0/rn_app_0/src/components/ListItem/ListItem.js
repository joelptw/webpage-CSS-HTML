import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={style.listItem}>
      <Image
        resizeMode="contain"
        source={props.placeImage}
        style={style.placeImage}
      ></Image>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

const style = StyleSheet.create({
  listItem: {
    marginBottom: 5,
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row"
    //flex: 1
    //alignItems: "center"
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});

export default listItem;
