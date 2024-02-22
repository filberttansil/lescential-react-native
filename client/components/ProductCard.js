import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function ProductCard({ imageUrl, name, price, description }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };
  return (
    <View className="rounded-lg w-[180px]  my-2 overflow-hidden shadow">
      <Image
        className="w-full h-44"
        source={{
          uri: `${imageUrl}`,
        }}
      />
      <Text className="text-lg font-semibold text-gray-800">{name}</Text>
      <Text className="text-gray-700">{description}</Text>
      <Text className="text-gray-800 font-semibold">{formatPrice(price)}</Text>
      <TouchableOpacity className="w-full bg-blue-500 py-2 mt-2">
        <Text className="text-white text-center font-extrabold font-md ">
          Add to Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
}
