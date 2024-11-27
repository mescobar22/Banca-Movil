// Comprobación de la estructura de css ver si es correcta y la funcionalidad de el boton

import React from "react";
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from "react-native";

export default function Transactions({ navigation }) {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
	      <Text style={styles.backButtonText}>↩︎</Text>
      </TouchableOpacity>

      <Text style={styles.txt_1}>Transactions</Text>

      <View style={styles.border}>
        <Text style={styles.txt_2}>Available Balance</Text>
        <Text style={styles.txt_3}>$200,000 MXN</Text>
      </View>

      <TouchableOpacity style={styles.historyContainer}>
        <Text style={styles.historyText}>History ⬇</Text>
      </TouchableOpacity>

      <View style={styles.transaction}>
        <Text style={styles.transactionTitle}>NETFLIX</Text>
        <Text style={styles.transactionPrice}>➚ $99.00</Text>
        <Text style={styles.transactionDate}>31.12.2024</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001b48",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 50,
    right: 5,
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
  txt_1: {
    marginTop: 100,
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  border: {
    marginTop: 30,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  txt_2: {
    fontSize: 16,
    color: "#cacaca",
    marginStart: -45,
  },
  txt_3: {
    color: "#001b48",
    fontWeight: "bold",
    fontSize: 36,
    marginTop: -5,
    marginStart: 60,
  },
  historyContainer: {
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  historyText: {
    color: "#001b48",
    fontWeight: "bold",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  transaction: {
    marginTop: 20,
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transactionTitle: {
    color: "#001b48",
    fontWeight: "bold",
    fontSize: 18,
    marginStart: 50,
  },
  transactionPrice: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
  transactionDate: {
    fontSize: 14,
    color: "#001b48",
    fontWeight: "bold",
  },
});
