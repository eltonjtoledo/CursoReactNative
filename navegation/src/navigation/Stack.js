import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from '../views/ScreenA';
import ScreenB from '../views/ScreenB';
import ScreenC from '../views/ScreenC';
import PassoStack from '../views/PassoStack';

const Stack = createStackNavigator();

export default props => (
    <Stack.Navigator initialRouteName="ScreenA">
        <Stack.Screen name="ScreenA" options={{title: "Home screen", headerTitleAlign: "center"}}>
            {props => (
                <PassoStack {...props } next="ScreenB" >
                    <ScreenA />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="ScreenB" >
            {props => (
                <PassoStack {...props} next="ScreenC" previus nextParam={{numero : parseInt(Math.random() * 100)}} >
                    <ScreenB />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="ScreenC" >
            {props => (
                <PassoStack {...props} previus next="ScreenC" nextParam={{numero : parseInt(Math.random() * 100)}}>
                    <ScreenC  {...props} />
                </PassoStack>
            )}
        </Stack.Screen>
    </Stack.Navigator>
)