import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from 'app/src/screen/splash_screen';
import HomeScreen from 'app/src/screen/home';

const Stack = createStackNavigator();

const NavigateContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash'>
                <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown: false}}/>
                <Stack.Screen name='Home' component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigateContainer;
