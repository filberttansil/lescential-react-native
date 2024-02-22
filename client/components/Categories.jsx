import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { CATEGORIES } from "../constants";

export default function Categories() {
  return (
    <ScrollView
      horizontal
      className="mt-3"
      showsHorizontalScrollIndicator={false}
    >
      {CATEGORIES.map((category, idx) => (
        <TouchableOpacity key={idx} className="bg-blue-500 mr-2 p-2 rounded-lg">
          <Text className="text-white text-md font-extrabold">{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
