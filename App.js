import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

const signIn = () => {
  // Add support for Google and Facebook sign in
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to YOGINE Health </Text>
      <Button title="Sign in with Google" onPress={signIn} />
      <Button title="Sign in with Facebook" onPress={signIn} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
