import { useLayoutEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import {useNavigation} from "@react-navigation/native";


export default function AddScreen({ navigation }) {
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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    onPress={() => navigation.navigate('Home')}
                    style={{ fontSize: 26, fontWeight: 'bold' }}>Add Screen</Text>
            </View>
        </ImageBackground>
    );
}


