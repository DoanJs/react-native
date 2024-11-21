import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";
import starIcon from "../../assets/images/star.png";

const styles = StyleSheet.create({
  detailContainer: {
    paddingTop: 40,
    borderWidth: 1,
    borderColor: "red",
  },
  review: {
    fontSize: 20,
    fontFamily: OPENSANS_REGULAR,
    padding: 10,
  },
});

const DetailScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route: RouteProp<RootStackParamList> = useRoute();

  return (
    <ImageBackground
      source={require("../../assets/images/react-native.png")}
      style={{ flex: 1 }}
      // style={styles.detailContainer}
    >
      <Text style={styles.review}>Id: {route.params?.id}</Text>
      <Text style={styles.review}>Tiêu đề: {route.params?.title}</Text>
      <Text style={styles.review}>Rating: {route.params?.star}</Text>
      <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
        <Image source={starIcon} style={{ height: 50, width: 50 }} />
        <Image source={starIcon} style={{ height: 50, width: 50 }} />
        <Image source={starIcon} style={{ height: 50, width: 50 }} />
        <Image source={starIcon} style={{ height: 50, width: 50 }} />
      </View>
    </ImageBackground>
  );
};
export default DetailScreen;
