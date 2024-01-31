import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native';


export default function AddScreen({ navigation }) {
    return (
        <ImageBackground
            source={require('../../assets/background.png')}
            style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center' }}
        >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    onPress={() => navigation.navigate('Home')}
                    style={{ fontSize: 26, fontWeight: 'bold' }}>Add Screen</Text>
            </View>
        </ImageBackground>
    );
}


