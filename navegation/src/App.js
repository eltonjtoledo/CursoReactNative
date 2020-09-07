import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import CenterText from './components/CenterText';
import ScreenA from './views/ScreenA';
import ScreenB from './views/ScreenB';
import ScreenC from './views/ScreenC';

export default App => (
    <SafeAreaView style={{flex: 1}}>
        <ScreenA />
        <ScreenB />
        <ScreenC />
    </SafeAreaView>
);