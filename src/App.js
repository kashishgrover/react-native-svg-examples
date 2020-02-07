import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Example1Screen from './screens/Example1/Example1Screen';
import Example2Screen from './screens/Example2Screen';
import Example3Screen from './screens/Example3Screen';
import Example4Screen from './screens/Example4Screen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Example1">
          <Stack.Screen name="Example1" component={Example1Screen} />
          <Stack.Screen name="Example2" component={Example2Screen} />
          <Stack.Screen name="Example3" component={Example3Screen} />
          <Stack.Screen name="Example4" component={Example4Screen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
