import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import AlertsListScreen from '../screens/AlertsListScreen';
import AlertDetailScreen from '../screens/AlertDetailScreen';

export type RootStackParamList = {
  Welcome: undefined;
  AlertsList: undefined;
  AlertDetail: { alertId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#f8f9fa' },
        headerTitleStyle: { fontWeight: 'bold', color: '#333' },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen
        name="AlertsList"
        component={AlertsListScreen}
        options={{ title: 'Fraud Alerts' }}
      />
      <Stack.Screen
        name="AlertDetail"
        component={AlertDetailScreen}
        options={{ title: 'Alert Details' }}
      />
    </Stack.Navigator>
  );
}
