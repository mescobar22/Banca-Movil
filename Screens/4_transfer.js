// Iconos, Se mueve las letras al iniciar el teclado del movil, validar pago con el boton 

import {
  Text,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  StatusBar,
} from "react-native";

export default function Transfer({ navigation }) {
  return (
    <View style={styles.container}>
      
        <TouchableOpacity
        style={styles.backButton} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.backButtonText}>↩︎</Text>
        </TouchableOpacity>

        <Text style={styles.txt_1}>Transfer</Text>
        <Text style={styles.txt_2}>Amount</Text>

        <TextInput
            style={styles.input}
            placeholder="              $0 MXN"
            placeholderTextColor="#ffffff"
            keyboardType="numeric"
        ></TextInput>
        
        <Text style={styles.txt_3}>Reference</Text>

        <TextInput
            style={styles.input_2}
            placeholder="#000000"
            placeholderTextColor="#ffffff"
            keyboardType="numeric"
        ></TextInput>

        <Text style={styles.txt_4}>Concept</Text>

        <TextInput
            style={styles.input_2}
            placeholderTextColor="#ffffff"
            keyboardType="default"
        ></TextInput>

        <View style={styles.row_container}>
          <Text style={styles.txt_5}>You can write up to 40 characters</Text>
          <Text style={styles.txt_6}>0/40</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Transfer_Vaucher')}>
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
    fontSize: 16,
    color: "#ffffff",
    marginTop: 40,
    marginBottom: -10,
    marginStart: -255,
  },
  txt_4: {
    fontSize: 16,
    color: "#ffffff",
    marginTop: 40,
    marginBottom: -10,
    marginStart: -260,
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
    paddingTop: 25,
    fontSize: 20,
    width: "140%",
    height: 60,
    borderBottomWidth: 1,
    borderColor: "#ffffff",
    color: "#ffffff",
  },
  row_container: {
    position: "absolute",
    bottom: 205,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txt_5: {
    fontSize: 9,
    color: "#ffffff",
    marginTop: 10,
    marginStart: -160,
  },
  txt_6: {
    fontSize: 9,
    color: "#ffffff",
    marginTop: 10,
    marginEnd: -160,
  },
  button: {
    marginTop: 85,
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 25,
    width: "120%",
    padding: 15,
    marginBottom: 55,
  },
  text_button: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#001b48",
    textDecorationLine: "underline",
  },
});
