import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const App = () => {
  return <SafeAreaProvider>
    <RootNaivgation />

    <StatusBar style="auto" />
  </SafeAreaProvider>
}


const RootNaivgation = () => {
  return(
    <Stack>
    <Stack.Screen name='(tabs)' options={{headerShown:false}} />
  </Stack>
  )
}

export default App;