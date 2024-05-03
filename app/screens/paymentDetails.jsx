import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const PaymentDetails = ({ route }) => {
  const { customerId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Details for {customerId}</Text>
      <View>
        <Text>Balance: </Text>
        <Text>Payment: </Text>
        <Text>Loan Start Date: </Text>
        <Text>Loan End Date: </Text>
      </View>
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
  btn: {
    flex: 1,
    alignItems: "flex-end",
    color: "#00004B",
  },

  text: {
    fontSize: 16,
    color: "#00004B",
  },
});
