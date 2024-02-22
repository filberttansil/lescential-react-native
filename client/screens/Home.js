import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { BANNER_URL } from "../constants";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import * as Icon from "react-native-feather";
// Fetch Products from this API
const API_URL = "http://localhost:3000/products";
export default function Home() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch products");
      const responseJSON = await response.json();
      setProducts(responseJSON.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSortAscending = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  const handleSortDescending = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <SafeAreaView>
      {/* Main */}
      <ScrollView className="px-3 py-2">
        {/* Banner */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {BANNER_URL.map((bannerImgURL, idx) => (
            <Banner key={idx} imgUrl={bannerImgURL} />
          ))}
        </ScrollView>

        {/* Categories */}
        <Categories />

        {/* ProductList */}
        <View className="mt-3 border-t-2 border-gray-200">
          <View className="flex-row justify-between items-center mx-2">
            <Text className="text-2xl font-semibold py-2 text-gray-800">
              Products
            </Text>
            {/* ASCENDING */}
            <View className="flex flex-row gap-1">
              <TouchableOpacity
                onPress={handleSortAscending}
                className="p-1 bg-blue-400 rounded-full flex flex-row items-center"
              >
                <Icon.ArrowUp stroke={"white"} />
              </TouchableOpacity>
              {/* DESCENDING */}
              <TouchableOpacity
                onPress={handleSortDescending}
                className="p-1 bg-blue-400 rounded-full flex flex-row items-center"
              >
                <Icon.ArrowDown stroke={"white"} />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row flex-wrap justify-around">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
