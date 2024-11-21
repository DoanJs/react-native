import { NavigationProp, RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";

const styles = StyleSheet.create({
  review: {
    fontSize: 20,
    fontFamily: OPENSANS_REGULAR,
    padding: 10
  },
});

const DetailScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route: RouteProp<RootStackParamList> = useRoute()
  
  return (
    <View>
      <Text style={styles.review}>Id: {route.params?.id}</Text>
      <Text style={styles.review}>Tiêu đề: {route.params?.title}</Text>
      <Text style={styles.review}>Rating: {route.params?.star}</Text>
      <Button title="Go Home" onPress={() => navigation.navigate("home")} />
    </View>
  );
};
export default DetailScreen;
