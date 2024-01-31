import { useLayoutEffect } from 'react';
import { View, Text, ImageBackground} from 'react-native';
import {useNavigation} from "@react-navigation/native";


export default function CalendarScreen({ navigation }) {
    const navigation_setting = useNavigation()

    useLayoutEffect(() => {
        navigation_setting.setOptions({
            headerShown : false
        })
    })
    return (
        <ImageBackground
            source={require('../../assets/app/background.png')}
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
