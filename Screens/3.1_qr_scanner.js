// La funcionalidad de el boton y el QR, validar QR para ir a la screen QR_Vaucher

import { Text, TouchableOpacity, View, StyleSheet, StatusBar} from "react-native";

export default function QR_Scanner({ navigation }) {
  return (
    <View style={styles.container}>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
	        <Text style={styles.backButtonText}>↩︎</Text>
        </TouchableOpacity>

        <View style={styles.border}></View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QR_Vaucher')}>
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
  backButton: {
    position: "absolute",
    top: 70,
    right: 15,
    backgroundColor: "#000000",
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
