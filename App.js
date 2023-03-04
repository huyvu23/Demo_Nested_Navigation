import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Tab")}>
        <Text>Tab</Text>
      </TouchableOpacity>
    </View>
  );
}

function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View>
      <Text>NotificationsScreen</Text>
    </View>
  );
}

function Tab() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Tab" component={Tab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
