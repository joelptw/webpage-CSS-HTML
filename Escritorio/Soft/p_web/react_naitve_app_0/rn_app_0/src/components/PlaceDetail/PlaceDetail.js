import React from "react";
import { Modal, View, Button, Image, Text, StyleSheet } from "react-native";

const placeDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image
          style={styles.placeImage}
          source={props.selectedPlace.image}
        ></Image>
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
    console.log(props.selectedPlace.name);
  }
  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      <View style={styles.modalContainter}>
        {modalContent}
        <View>
          <Button
            color="red"
            title="Delete"
            onPress={props.onDeletedItem}
          ></Button>
          <Button title="Cancel" onPress={props.onModalClosed}></Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainter: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20
  }
});

export default placeDetail;
