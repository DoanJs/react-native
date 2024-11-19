import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([]);
  interface ITodo {
    id: number;
    name: string;
  }

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if (!todo) {
      Alert.alert("Lỗi input todo", "Todo không được để trống", [
        {
          text: "Hủy",
          onPress: () => console.log("Ask me later pressed"),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }
    setListTodo([...listTodo, { id: randomInteger(2, 2000000), name: todo }]);
    setTodo("");
  };

  const deleteTodo = (id: number) => {
    const newTodos = listTodo.filter((item) => item.id !== id);
    setListTodo(newTodos);
  };
  // {id: 1, name: 'Js'}
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Text style={styles.header}>Todo APP</Text>

        {/* form */}
        <View style={styles.form}>
          <TextInput
            value={todo}
            style={styles.todoInput}
            onChangeText={(value) => setTodo(value)}
          />
          <Button title="Add todo" onPress={handleAddTodo} />
        </View>

        {/* list todo  onPress={() => alert("text") }*/}
        <View style={styles.todo}>
          <FlatList
            keyExtractor={(item) => item.id + ""}
            data={listTodo}
            renderItem={({ item }) => {
              return (
                <Pressable
                  style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                  onPress={() => deleteTodo(item.id)}
                >
                  <View style={styles.groupTodo}>
                    <Text style={styles.todoItem}>{item.name}</Text>
                    <AntDesign name="close" size={24} color="black" />
                  </View>
                </Pressable>
              );
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  groupTodo: {
    flexDirection: "row",
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: "dashed",
    marginBottom: 15,
    justifyContent: 'space-between',
    padding: 15,
    marginHorizontal: 10
  },
  container: {
    paddingTop: 50,
    backgroundColor: "#fff",
    flex: 1,
  },

  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 60,
  },

  form: {
    // flex: 2,
    marginBottom: 20
  },

  todo: {
    flex: 8,
  },

  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    padding: 5,
    marginHorizontal: 15,
    margin: 15,
  },

  todoItem: {
    fontSize: 20,
  },

  body: {
    paddingHorizontal: 10,
    marginBottom: 20,
    flex: 1,
  },
});
