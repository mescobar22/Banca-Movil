import { Text, TouchableOpacity, View, StyleSheet, StatusBar} from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt_1}>Hola</Text>
      <Text style={styles.txt_2}>Nombre</Text>
      <Text style={styles.txt_5}>Ultimo ingreso:</Text>
      <Text style={styles.txt_5}>11.11.2024 Vía Móvil</Text>
      <View style={styles.border}>
        <Text style={styles.txt_3}>Saldo disponible</Text>
        <Text style={styles.txt_4}>$200,000 MXN</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text_button}>Sign Up</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
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
    borderRadius: 15,
    backgroundColor: "#ffffff",
    width: "140%",
    marginBottom: "175%",
    padding: 20,
  },
  txt_1: {
    marginBottom: -6,
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
  txt_2: {
    fontSize: 25,
    color: "#ffffff",
  },
  txt_3: {
    marginEnd: "35%",
    fontSize: 15,
    fontWeight: "bold",
    color: "#e3e3e3",
  },
  txt_4: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#011c49",
    paddingBottom: 35,
  },
  txt_5: {
    fontSize: 15,
    color: "#ffffff",
    paddingBottom: 35,
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
    color: "#001b48",
    backgroundColor: "#ffffff",
  },
});
