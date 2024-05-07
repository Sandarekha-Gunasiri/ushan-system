import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const PaymentDetails = ({ route }) => {
  const { customerId } = route.params;
  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPaymentDetails();
  }, []);

  const fetchPaymentDetails = async () => {
    try {
      const response = await fetch(
        `http://128.199.25.88:86/index.php/api/loan/loaninfo/${customerId}`
      );
      const responseData = await response.json();
      console.log("Response data:", responseData);
      setPaymentData(responseData);
      setLoading(false);
    } catch (error) {
      console.error("Error ", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00004B" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Details for {customerId}</Text>
      {paymentData && (
        <View>
          <Text style={styles.text}>
            Customer:<Text style={styles.dataText}>{paymentData.customer}</Text>
          </Text>

          <Text style={styles.text}>
            Balance:<Text style={styles.dataText}> {paymentData.balance}</Text>
          </Text>
          <Text style={styles.text}>
            Payment:<Text style={styles.dataText}> {paymentData.payment}</Text>
          </Text>
          <Text style={styles.text}>
            Loan Start Date:
            <Text style={styles.dataText}>{paymentData.date}</Text>
          </Text>
          <Text style={styles.text}>
            Loan End Date:
            <Text style={styles.dataText}> {paymentData.duration}</Text>
          </Text>
          <Text style={styles.text}>
            Amount:<Text style={styles.dataText}> {paymentData.amount}</Text>
          </Text>
          <TextInput style={styles.input} placeholder="Enter Amount" />
        </View>
      )}
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
    marginVertical: 15,
    fontWeight:"bold"
  },
  dataText: {
    fontSize: 16,
    color: "#00004B",
    marginHorizontal: 30,
    marginVertical: 15,
    fontWeight:"normal"
  },
});
