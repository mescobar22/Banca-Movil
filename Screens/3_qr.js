import { Text, TouchableOpacity, View, StyleSheet, StatusBar, Image} from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import QRCode from 'react-native-qrcode-svg';
import React, { useState, useEffect } from "react";

export default function QR({ navigation, route }) {
  const { qr_id, qr_data } = route.params || {};

  useEffect(() => {
    if (!qr_id || !qr_data) {
      Alert.alert("Error", "QR ID or data not found.");
      navigation.goBack();
    } else {
      console.log("Received QR ID:", qr_id);
      console.log("Received QR Data:", qr_data);
    }
  }, [qr_id, qr_data]);

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
	        <Text style={styles.backButtonText}>↩︎</Text>
        </TouchableOpacity>

        <Text style={styles.txt_1}>Bring the device closer</Text>
        <Text style={styles.txt_2}>to scan QR code</Text>
        
        <Text style={styles.txt_3}>My QR</Text>
          <View style={styles.icon_1}>
            <MaterialCommunityIcons name="qrcode-scan" size={235} color="#001b48" />
          </View>
          <View style={styles.qr}>
            {qr_data ? (
              <>
              <QRCode
               value={qr_id}
               size={200}      
               backgroundColor="white"
               color="#000000"
               />
               </>
               ) : (
               <Text style={styles.errorTxt}>No QR data available to generate a QR code.</Text>)}
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
    top: 270,
    fontSize:25,
    fontWeight: "bold",
    color: "#ffffff",
    textDecorationLine: "underline",
  },
  icon_1: {
    position: "absolute",
    bottom:200,
    alignItems: "center",
    width: "100%",
  },
  qr: {
    position: "absolute",
    bottom: 220,
  },
  button: {
    marginTop: 300,
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 25,
    width: "120%",
    padding: 15,
  },
  icon_2: {
    position: "absolute",
    top: 18,
    right: 90,
  },
  text_button: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#001b48",
    textDecorationLine: "underline",
  },
});