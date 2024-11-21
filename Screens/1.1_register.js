// Comprobación de la estructura de css ver si es correcta y la funcionalidad de el boton 

import { Text, TouchableOpacity, TextInput, View, StyleSheet, StatusBar} from "react-native";

export default function Register() {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.backButton} onPress={() => alert("Funciona")}>
        <Text style={styles.backButtonText}>↩︎</Text>
      </TouchableOpacity>

      <Text style={styles.txt_1}>Banca</Text>
      <Text style={styles.txt_2}>móvil</Text>

      <View style={styles.border}>
        <Text style={styles.txt_3}>Sign-up</Text>

        <TextInput
          style={styles.input}
          placeholder=" Name"
          placeholderTextColor="#abb3c1"
        ></TextInput>

        <TextInput
          style={styles.input}
          placeholder=" Last name"
          placeholderTextColor="#abb3c1"
        ></TextInput>

        <TextInput
          style={styles.input}
          placeholder=" Email"
          placeholderTextColor="#abb3c1"
        ></TextInput>

        <TextInput
          style={styles.input}
          placeholder=" Password"
          placeholderTextColor="#abb3c1"
        ></TextInput>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text_button}>Register</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}
//CSS
const styles = StyleSheet.create({
  container: {
    padding: 80,
    flex: 1,
    backgroundColor: "#001b48",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "#001b48",
    borderRadius: 5,
    width:"20%",
  },
  backButtonText: {
    fontSize: 35,
    color: "#ffffff",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: -10,
  },
  border: {
    flex: 1,
    alignItems: "center",
    borderColor: "#ff3030",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    backgroundColor: "#ffffff",
    width: "170%",
    marginBottom: "-50%",
    padding: 20,
  },
  txt_1: {
    marginBottom: -32,
    fontSize: 70,
    fontWeight: "bold",
    color: "#ffffff",
  },
  txt_2: {
    marginStart: -45,
    fontSize: 60,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 25,
  },
  txt_3: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#011c49",
    paddingBottom: 35,
  },
  input: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#f9f8f8",
    width: "100%",
    margin: 12,
  },
  button: {
    marginTop: "20%",
    borderWidth: 2,
    backgroundColor: "#001b48",
    alignItems: "center",
    borderRadius: 25,
    width: "90%",
    padding: 15,
  },
  text_button: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  quit_icon: {
    fontSize: 20,
  }
});
