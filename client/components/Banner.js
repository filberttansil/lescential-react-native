import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";

export default function Banner({ imgUrl }) {
  return (
    <TouchableOpacity className="shadow-lg rounded-xl p-1">
      <Image
        source={{
          uri: `${imgUrl}`,
        }}
        className="w-[380px] h-[200px] rounded-xl"
      />
    </TouchableOpacity>
  );
}
