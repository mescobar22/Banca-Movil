/* Falta añadir la parte de abajo del diseño y el boton de regresar a la ventana anterior */
import { Text, TouchableOpacity, View, StyleSheet, StatusBar} from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt_1}>Hello</Text>
      <Text style={styles.txt_2}>Name</Text>
      <Text style={styles.txt_3}>Last login:</Text>
      <Text style={styles.txt_4}>11.11.2024 11.11.11 Via Mobile</Text>
      <View style={styles.border}>
        <Text style={styles.txt_5}>Available Balance</Text>
        <Text style={styles.txt_6}>$200,000 MXN</Text>
      </View>
      <View style={styles.button_container}> 
        <TouchableOpacity style={styles.button_1}>
          <Text style={styles.text_button}>⬆ Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_2}>
          <Text style={styles.text_button}>⬇ Receive</Text>
        </TouchableOpacity>
      </View> 
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
    marginTop: 50,
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
    marginTop: 20,
    fontSize: 15,
    color: "#ffffff",
  },
  txt_4: {
    fontSize: 15,
    color: "#ffffff",
    marginBottom: 70,
  },
  border: {
    flex: 1,
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#ffffff",
    width: "145%",
    marginBottom:320,
  },
  txt_5: {
    marginTop: 15,
    marginEnd: 65,
    marginBottom: 5,
    fontSize: 15,
    color: "#cacaca",
  },
  txt_6: {
    color: "#001b48",
    fontWeight: "bold",
    fontSize: 35,
    marginStart: 45,
    marginTop: -10,
  },
  button_container: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  button_1: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 15,
    width: 150,
    padding: 15,
    marginTop: -300,
    marginBottom: 20,
  },
  button_2: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 15,
    width: 150,
    padding: 25,
  },
  text_button: {
    fontSize:15,
    fontWeight: "bold",
    color:"#000000",
  },
});