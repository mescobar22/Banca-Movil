// Comprobación de la estructura de css ver si es correcta y la funcionalidad de el boton, poner en numerico el teclado y letra de acuerdo al input

import {
  Text,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function Register() {
  return (
    <View style={styles.container}>
      
        <TouchableOpacity
        style={styles.backButton}
        onPress={() => alert("Funciona")}>
            <Text style={styles.backButtonText}>↩︎</Text>
        </TouchableOpacity>

        <Text style={styles.txt_1}>Transfer</Text>
        <Text style={styles.txt_2}>Amount</Text>

        <TextInput
            style={styles.input}
            placeholder="              $0 MXN"
            placeholderTextColor="#ffffff"
        ></TextInput>
        
        <Text style={styles.txt_3}>Reference</Text>

        <TextInput
            style={styles.input_2}
            placeholder="#000000"
            placeholderTextColor="#ffffff"
        ></TextInput>

        <Text style={styles.txt_4}>Concept</Text>

        <TextInput
            style={styles.input_2}
            placeholderTextColor="#ffffff"
        ></TextInput>
        
        <Text style={styles.txt_5}>You can write up to 40 characters</Text>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.text_button}>Continue</Text>
        </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
//CSS
const styles = StyleSheet.create({
  container: {
    padding: 80,
    flex: 1,
    backgroundColor: "#001b48",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "#001b48",
    borderRadius: 5,
    width: "20%",
  },
  backButtonText: {
    fontSize: 35,
    color: "#ffffff",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: -10,
  },
  txt_1: {
    marginTop: 50,
    marginBottom: 130,
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
  txt_2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 5,
  },
  txt_3: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 40,
    marginBottom: -10,
    marginStart: -235,
  },
  txt_4: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 40,
    marginBottom: -10,
    marginStart: -250,
  },
  txt_5: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 40,
    marginBottom: -10,
    marginStart: -250,
  },
  input: {
    fontSize: 30,
    fontWeight: "bold",
    width: "140%",
    height: 60,
    borderBottomWidth: 1,
    borderColor: "#ffffff",
    color: "#ffffff",
  },
  input_2: {
    fontSize: 20,
    fontWeight: "bold",
    width: "140%",
    height: 60,
    borderBottomWidth: 1,
    borderColor: "#ffffff",
    color: "#ffffff",
  },
  button: {
    marginTop: 25,
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 25,
    width: "120%",
    padding: 15,
    marginBottom: 45,
  },
  text_button: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#001b48",
    textDecorationLine: "underline",
  },
});
