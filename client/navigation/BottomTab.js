import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import ReferralScreen from "../screens/Referral";
import ProfileScreen from "../screens/Profile";
import CartScreen from "../screens/Cart";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#3B81F6",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 10,
              }}
            >
              <Icon.Home width={25} height={25} stroke={"gray"} />
              <Text>Home</Text>
            </View>
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 10,
              }}
            >
              <Icon.Gift width={25} height={25} stroke={"gray"} />
              <Text>Referral</Text>
            </View>
          ),
        }}
        name="Referral"
        component={ReferralScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Icon.Send width={25} height={25} stroke={"white"} />
            </View>
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
        name="Checkout"
        component={CartScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 10,
              }}
            >
              <Icon.ShoppingCart width={25} height={25} stroke={"gray"} />
              <Text>Cart</Text>
            </View>
          ),
        }}
        name="Cart"
        component={CartScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 10,
              }}
            >
              <Icon.User width={25} height={25} stroke={"gray"} />
              <Text>Profile</Text>
            </View>
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
