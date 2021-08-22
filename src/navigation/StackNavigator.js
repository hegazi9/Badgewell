import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home/home";
import Signin from "../screens/signin/signin";
import Signup from "../screens/signup/signup";

const Stack = createStackNavigator();

export default MainStackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};


