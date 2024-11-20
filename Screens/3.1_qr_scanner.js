// Falta añadir el boton de regresar a la ventana anterior 
import { Text, TouchableOpacity, View, StyleSheet, StatusBar} from "react-native";

export default function QR_Scanner() {
  return (
    <View style={styles.container}>
        <View style={styles.border}></View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text_button}>Continue ⮕</Text>
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
    backgroundColor: "#000000",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: -10,
  },
  border: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: "110%",
    marginBottom: 150,
    marginTop: 180,
  },
  button: {
    marginTop: -25,
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
