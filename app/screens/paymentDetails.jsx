import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const PaymentDetails = ({ route }) => {
  const { customerId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Details for {customerId}</Text>
      <View style={styles.dtls}>
        <Text style={styles.text}>Balance: </Text>
        <Text style={styles.text}>Payment: </Text>
        <Text style={styles.text}>Loan Start Date: </Text>
        <Text style={styles.text}>Loan End Date: </Text>
        <Text style={styles.text}>Value:</Text>
        <TextInput style={styles.input} placeholder="Enter Amount" />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>BILL</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#f3f3f3",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 2,
    color: "#00004B",
    marginBottom: 20,
    marginRight: 120,
  },
  button: {
    backgroundColor: "#00004B",
    borderRadius: 100,
    paddingVertical: 15,
    marginTop: 10,
    height: 55,
    alignItems: "center",
    width: 200,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  dtls: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    borderColor: "#ffffff",
    justifyContent: "space-around",
    backgroundColor: "#ffffff",
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 15,
    paddingLeft: 10,
    marginBottom: 10,
    width: 300,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    alignItems: "center",
    color: "#ccc",
  },
  text: {
    fontSize: 16,
    color: "#00004B",
    marginHorizontal: 30,
    marginVertical: 20,
  },
});
