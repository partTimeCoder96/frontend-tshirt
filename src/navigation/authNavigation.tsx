import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../features/welcome";

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
    initialRouteName="welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="welcome" component={Welcome} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
