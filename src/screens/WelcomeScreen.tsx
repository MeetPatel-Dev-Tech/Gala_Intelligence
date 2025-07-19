import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen({ navigation }: Props) {
  const handleLogin = () => {
    Alert.alert('Login', 'Mocked login action.');
  };

  const handleSignup = () => {
    Alert.alert('Signup', 'Mocked signup action.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Gala Intelligence</Text>
      <Text style={styles.subtitle}>
        Stay ahead of fraud. Monitor, review, and take action confidently.
      </Text>

      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} color="#007BFF" />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={handleSignup} color="#28a745" />
      </View>

      <View style={styles.getStartedButton}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('AlertsList')}
          color="#333"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 16,
  },
  getStartedButton: {
    width: '100%',
    marginTop: 20,
  },
});
