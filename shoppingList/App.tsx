import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import StartScreen from './components/StartScreen';
import Settings from './components/Settings';

type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

type SettingsScreenRouteProp = RouteProp<RootStackParamList, 'Settings'>;
const Stack = createNativeStackNavigator();

const App : React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={StartScreen}
        />
        <Stack.Screen 
          name="Settings" 
          component={Settings} 
        />
      </Stack.Navigator>
      {/* <View style={styles.container}>
        <StartScreen />
      </View> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;