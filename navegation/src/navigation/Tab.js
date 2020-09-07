import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenA from '../views/ScreenA';
import ScreenB from '../views/ScreenB';
import ScreenC from '../views/ScreenC';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default props => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                    case "ScreenA":
                        iconName = focused
                            ? 'md-home-sharp'
                            : 'home-outline';
                        break;
                    case "ScreenB":
                        iconName = focused
                            ? 'md-hammer'
                            : 'md-hammer-outline';
                        break;
                    case "ScreenC":
                        iconName = focused
                            ? "md-list-sharp"
                            : "md-list-outline";
                        break;
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            showLabel: true,
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            labelStyle: { fontSize: 10, fontWeight: "bold" }
        }} initialRouteName="ScreenC">
        <Tab.Screen name="ScreenA" options={{title: "Home"}} component={ScreenA} />
        <Tab.Screen name="ScreenB" options={{title: "Midh"}} component={ScreenB} />
        <Tab.Screen name="ScreenC" options={{title: "Last"}} component={ScreenC} />
    </Tab.Navigator>
)