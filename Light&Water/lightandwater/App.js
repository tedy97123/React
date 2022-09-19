import React from "react";
import {StyleSheet} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

import Home from "./screens/Home";
import Details from "./screens/Details";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import ConfirmEmail from "./screens/ConfirmEmail";
import ForgotPassword from "./screens/ForgotPassword";
import NewPasswordScreen from "./screens/NewPasswordScreen";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      > 
        <Stack.Screen styles={styles.root} name="NewPasswordScreen" component={NewPasswordScreen} />
        <Stack.Screen styles={styles.root} name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen styles={styles.root} name="ConfirmEmail" component={ConfirmEmail} />
        <Stack.Screen styles={styles.root} name="Signup" component={Signup} />
        <Stack.Screen styles={styles.root} name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex:1, 
    backgroundColor:'#F9FBFC'
  }
})

export default App;