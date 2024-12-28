import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import Welcome from './welcome/welcome';

export default function Home() {
  return (
    <View style={styles.container}>
        <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});