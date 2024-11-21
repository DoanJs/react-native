import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import AboutScreen from "./components/review/about";
import HomeScreen from "./components/review/home";
import { FREEBSCA, OPENSANS_REGULAR } from "./utils/const";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./components/navigation/app.navigation";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [loaded, error] = useFonts({
    [OPENSANS_REGULAR]: require("./assets/fonts/OpenSans-Regular.ttf"),
    [FREEBSCA]: require("./assets/fonts/FREEBSCA.ttf"),
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
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};
export default App;
