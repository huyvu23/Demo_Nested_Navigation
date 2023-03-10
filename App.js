import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}

function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("DrawerInStack", { screen: "Login" })
        }
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>NotificationsScreen</Text>
    </View>
  );
}

function DrawerInStack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen
          name="DrawerInStack"
          component={DrawerInStack}
          options={{ headerShown: false }}
        />
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
