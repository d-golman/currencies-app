import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { FC } from 'react';
import { StyleSheet } from 'react-native';
import RatesPage from './pages/rates';
import HistoryPage from './pages/history';

const Stack = createNativeStackNavigator();

const App: FC = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="Rates"
          component={RatesPage}
        />
        <Stack.Screen
          name="History"
          component={HistoryPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
