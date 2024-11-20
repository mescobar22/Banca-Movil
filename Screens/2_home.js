// Falta añadir el boton de regresar a la ventana anterior 
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
        <View style={styles.row_container}>
          <TouchableOpacity style={styles.button_1}>
            <Text style={styles.text_button}>⬆ Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_2}>
            <Text style={styles.text_button}>⬇ Receive</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button_3}>
          <Text style={styles.text_button}>Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.border_2}>
        <Text style={styles.txt_7}>Transactions</Text>
        <Text style={styles.txt_8}>⬆ See all</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
//CSS
const styles = StyleSheet.create({
  container: {
    padding: 40,
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
    marginBottom: 50,
  },
  border: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    width: "110%",
    padding: 20,
  },
  txt_5: {
    fontSize: 15,
    color: "#cacaca",
    marginEnd: 70,
  },
  txt_6: {
    color: "#001b48",
    fontWeight: "bold",
    fontSize: 35,
    marginTop: -5,
    marginLeft: 35,
  },
  button_container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 120,
    marginTop: 30,
  },
  row_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    marginBottom: 10,
  },
  button_1: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 10,
    width: 150,
    padding: 10,
    marginRight:10,
  },
  button_2: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 10,
    width: 150,
    padding: 10,
    marginRight:10,
  },
  button_3: {
    marginTop: 10,
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 10,
    width: 150,
    padding: 10,
    marginBottom: 100,
  },
  text_button: {
    fontSize:15,
    fontWeight: "bold",
    color:"#000000",
    textDecorationLine: "underline",
  },
  border_2: {
    flex: 1,
    alignItems: "center",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    backgroundColor: "#ffffff",
    width: "140%",
    padding: 20,
    marginBottom: -40,
  },
  txt_7: {
    marginTop: 10,
    fontSize: 25,
    color: "#001b48",
    fontWeight: "bold",
  },
  txt_8: {
    fontSize: 15,
    color: "#001b48",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});