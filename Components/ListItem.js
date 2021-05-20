import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Container,
  Header,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Icon,
} from "native-base";
const ListItem = () => {
  return (
    <Container>
      <Header />
      <List>
        <ListItem>
          <Left>
            <Thumbnail source={{ uri: "" }} />
          </Left>
          <Body>
            <Text>Aaimaa Web Solutions</Text>
            <Text>Doing what you like will always keep you happy . .</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
      </List>
    </Container>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
