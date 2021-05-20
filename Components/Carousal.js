import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
const Carousal = () => {
  const images = [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
  ];
  return (
    <View>
      <SliderBox images={images} />
    </View>
  );
};

export default Carousal;

const styles = StyleSheet.create({});
