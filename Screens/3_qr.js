// QR

import { Text, TouchableOpacity, View, StyleSheet, StatusBar} from "react-native";

export default function QR({ navigation }) {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
	        <Text style={styles.backButtonText}>↩︎</Text>
        </TouchableOpacity>

        <Text style={styles.txt_1}>Bring the device closer</Text>
        <Text style={styles.txt_2}>to scan QR code</Text>
        
        <Text style={styles.txt_3}>My QR</Text>
        <View style={styles.border}></View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QR_Scanner')}>
            <Text style={styles.text_button}>Start ⮕</Text>
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
    backgroundColor: "#02457a",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 70,
    right: 15,
    backgroundColor: "#02457a",
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
  txt_1: {
    marginTop: 120,
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff",
  },
  txt_2: {
    fontSize:15,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 100,
  },
  txt_3: {
    position: "absolute",
    top: 280,
    fontSize:25,
    fontWeight: "bold",
    color: "#ffffff",
    textDecorationLine: "underline",
  },
  border: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: "85%",
    marginBottom: 110,
    marginTop: -10,
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
