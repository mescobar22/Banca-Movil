// La funcionalidad de el boton y el QR, validar QR para ir a la screen QR_Vaucher

import { Text, TouchableOpacity, View, StyleSheet, StatusBar} from "react-native";
import Feather from '@expo/vector-icons/Feather';


export default function QR_Scanner({ navigation }) {
  return (
    <View style={styles.container}>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
	        <Text style={styles.backButtonText}>↩︎</Text>
        </TouchableOpacity>

        <View style={styles.border}></View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QR_Vaucher')}>
          <View style={styles.icon_1}>
            <Feather name="arrow-right" size={24} color="#001b48"/>
          </View>
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
    width: "100%",
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
  icon_1: {
    position: "absolute",
    top: 17,
    right: 72,
  },
  text_button: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#001b48",
    textDecorationLine: "underline",
  },
});
