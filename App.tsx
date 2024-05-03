import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./app/screens/Login";
import Details from "./app/screens/Details";
import Home from "./app/screens/Home";
import PaymentDetails from "./app/screens/paymentDetails";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
