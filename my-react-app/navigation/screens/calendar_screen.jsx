import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native';

export default function CalendarScreen({ navigation }) {
    return (
        <ImageBackground
            source={require('../../assets/background.png')}
            style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center' }}
        >
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold', color: 'white' }}
            >
                Calendar Screen
            </Text>
        </ImageBackground>
    );
}
