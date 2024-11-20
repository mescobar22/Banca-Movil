// Falta añadir el boton de regresar a la ventana anterior e icono de dinero 
import { Text, TouchableOpacity, View, StyleSheet, StatusBar} from "react-native";

export default function QR_Vaucher() {
  return (
    <View style={styles.container}>
        <Text style={styles.txt_1}>You have received</Text>
        <Text style={styles.txt_2}>$1000.00</Text>
        <Text style={styles.txt_3}>See receipt</Text>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text_button}>⬅ Go back</Text>
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
    justifyContent: "flex-start",
    alignItems: "center",
  },
  txt_1: {
    marginTop: 250,
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
  },
  txt_2: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ffffff",
  },
  txt_3: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 5,
    marginBottom: 200,
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 25,
    width: "120%",
    padding: 15,
    marginBottom: 80,
  },
  text_button: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#001b48",
    textDecorationLine: "underline",
  },
});
