import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert(
        "Missing Information",
        "Please enter both email and password."
      );
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post("http://128.199.25.88:86/loan/login", {
        email,
        password,
      });
      console.log("Login successful:", response.data);
      //   navigation.navigate('Details');
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert(
        "Login Error",
        "Invalid email or password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hi Welcome Back !!!!! 👋</Text>
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.text}>Email Address</Text>
        <TextInput
          value={email}
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          value={password}
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>
      <View style={styles.cnt}>
        <Text>Do not have an account</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginTop: 200,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginVertical: 3,
    height: 40,
    borderRadius: 100,
    shadowColor: "grey",
    shadowOpacity: 50,
    padding: 10,
    backgroundColor: "#e6e6ee",
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    marginVertical: 8,
    color: "#00004B",
  },
  button: {
    backgroundColor: "#00004B",
    borderRadius: 100,
    paddingVertical: 15,
    marginTop: 10,
    height: 55,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  cnt: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 2,
  },
  link: {
    fontWeight: "bold",
    color: "#00004B",
    marginLeft: 6,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 2,
    color: "#00004B",
    marginBottom: 20,
  },
});
