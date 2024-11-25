import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import {
  Button,
  Keyboard,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "red",
    paddingVertical: 10,
  },
  headerText: {},
  groupInput: {
    marginBottom: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
  },
  input: {
    borderWidth: 1,
    borderColor: "red",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

interface IProps {
  modalVisible: boolean;
  setModalVisible: (v: boolean) => void;
}
interface IFormRV {

}
const CreateModal = (props: IProps) => {
  const { modalVisible, setModalVisible } = props;
const [formRV, setFormRV] = useState(null)
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <View style={styles.container}>
          {/* header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Create a review</Text>
            <AntDesign
              name="close"
              size={24}
              color="black"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
          {/* body */}
          <View>
            <View style={styles.groupInput}>
              <Text style={styles.text}>Nội dung:</Text>
              <TextInput style={styles.input} />
            </View>
            <View>
              <Text style={styles.text}>Rating:</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                maxLength={1}
              />
            </View>
          </View>
          {/* footer */}
          <View>
            <Button title="Add" onPress={()=> alert('ọ')}/>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CreateModal;
