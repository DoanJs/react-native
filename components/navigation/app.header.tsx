import { View, Text, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: "center",
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
  },
});
const AppHeader = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="menu"
        size={24}
        color="black"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <Text style={styles.headerText}>Header Js</Text>
    </View>
  );
};
export default AppHeader;
