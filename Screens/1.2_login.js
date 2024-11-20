// Falta añadir el boton de regresar a la ventana anterior 
import { Text, TouchableOpacity, TextInput, View, StyleSheet, StatusBar} from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt_1}>Banca</Text>
      <Text style={styles.txt_2}>móvil</Text>
      <Text style={styles.txt_3}>Welcome</Text>
      <View style={styles.border}>
        <Text style={styles.txt_4}>Log in to</Text>
        <Text style={styles.txt_5}>Your account</Text>
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
        <Text style={styles.txt_6}>Forgot your password?</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text_button}>Log in</Text>
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
  border: {
    flex: 1,
    alignItems: "center",
    borderColor: "#ff3030",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    backgroundColor: "#ffffff",
    width: "170%",
    marginBottom: "-50%",
    padding: 40,
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
  },
  txt_3: {
    padding: 20,
    fontSize: 35,
    fontWeight: "bold",
    color: "#ffffff",
  },
  txt_4: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#20385f",
  },
  txt_5: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#001b48",
    paddingBottom: 30,
  },
  txt_6: {
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "#405476",
    paddingBottom: 80,
    textDecorationLine: "underline",
  },
  input: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#f9f8f8",
    width: "100%",
    margin: 8,
  },
  button: {
    marginTop: -25,
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
});
