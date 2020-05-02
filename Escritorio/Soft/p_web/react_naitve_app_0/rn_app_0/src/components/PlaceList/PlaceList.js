import React, { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "../ListItem/ListItem";

/*
class PlaceList extends Component {
  placesOutput = () => {
    this.props.places.map((place, i) => (
      <ListItem key={i} placeName={place}></ListItem>
    ));
  };

  render() {
    return <View style={styles.listContainer}>{this.placesOutput}</View>;
  }
}
*/

const PlaceList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        ></ListItem>
      )}
      keyExtractor={(info, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default PlaceList;
