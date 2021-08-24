import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home/home";
import Signin from "../screens/signin/signin";
import Signup from "../screens/signup/signup";
import Splash from "../screens/splash/splash";

const Stack = createStackNavigator();

 const MainStackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator ;

