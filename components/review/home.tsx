import AntDesign from "@expo/vector-icons/AntDesign";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CreateModal from "./create.modal";

const styles = StyleSheet.create({
  reviewText: {
    backgroundColor: "#ccc",
    padding: 10,
    margin: 10,
  },
});

interface IReview {
  id: number;
  title: string;
  star: number;
}

const HomeScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [reviews, setReviews] = useState<IReview[]>([
    {
      id: 1,
      title: "Js",
      star: 3,
    },
    {
      id: 2,
      title: "Hung",
      star: 4,
    },
    {
      id: 3,
      title: "Doan",
      star: 5,
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <AntDesign
          name="plussquareo"
          size={30}
          color="orange"
          onPress={() => setModalVisible(true)}
        />
      </View>
      <View>
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id + ""}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <Text
                  onPress={() => navigation.navigate("review-detail", item)}
                  style={styles.reviewText}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
        <CreateModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
    </View>
  );
};
export default HomeScreen;
