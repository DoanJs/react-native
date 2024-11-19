import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View } from "react-native";
import AboutScreen from "./components/review/about";
import DetailScreen from "./components/review/detail";
import HomeScreen from "./components/review/home";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [loaded, error] = useFonts({
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "FREEBSCA": require("./assets/fonts/FREEBSCA.ttf"),

  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return (
    <View style={{ padding: 50 }}>
      <HomeScreen />
      <DetailScreen />
      <AboutScreen />
    </View>
  );
};
export default App;
