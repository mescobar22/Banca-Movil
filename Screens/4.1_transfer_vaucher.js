// Comprobación de la estructura de css ver si es correcta y la funcionalidad de el botón, iconos

import { Text, TouchableOpacity, View, StyleSheet, StatusBar} from "react-native";

export default function Transfer_Vaucher() {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.backButton} onPress={() => alert("Funciona")}>
	      <Text style={styles.backButtonText}>↩︎</Text>
      </TouchableOpacity>

      <View style={styles.border}>
        <Text style={styles.txt_1}>You have received</Text>
        <Text style={styles.txt_2}>$1000.00</Text>
        <Text style={styles.txt_3}>See receipt</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text_button}>⬅ Go back</Text>
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
    top: 70,
    right: 25,
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
    marginTop: 60,
    marginBottom: "-40%",
    padding: 20,
  },
  txt_1: {
    marginTop: 150,
    fontSize: 25,
    fontWeight: "bold",
    color: "#001b48",
  },
  txt_2: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#001b48",
  },
  txt_3: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#001b48",
    marginTop: 5,
    marginBottom: 220,
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#001b48",
    alignItems: "center",
    borderRadius: 25,
    width: "85%",
    padding: 15,
    marginBottom: 80,
  },
  text_button: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    textDecorationLine: "underline",
  },
});
