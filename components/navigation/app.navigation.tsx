import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import HomeScreen from "../review/home";
import DetailScreen from "../review/detail";
import { createDrawerNavigator } from "@react-navigation/drawer";

import "react-native-gesture-handler";
import AboutScreen from "../review/about";
import AppHeader from "./app.header";
const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const HomeLayout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ header: () => <AppHeader /> }}
      />
      <Stack.Screen
        name="review-detail"
        component={DetailScreen}
        options={{ title: "Chi tiết" }}
      />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <Drawer.Navigator
    // screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen
        options={{ title: "Trang chủ", header: () => <></> }}
        name="home1"
        component={HomeLayout}
      />
      <Drawer.Screen
        options={{ title: "Thông tin", header: () => <AppHeader /> }}
        name="about"
        component={AboutScreen}
      />
    </Drawer.Navigator>
  );
};
export default AppNavigation;
