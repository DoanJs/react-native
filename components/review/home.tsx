import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
  return (
    <View>
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
    </View>
  );
};
export default HomeScreen;
