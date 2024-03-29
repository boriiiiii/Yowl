import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import {useLayoutEffect, useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function SearchScreen({ navigation }) {
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
             <Image
                source={require('../../assets/app/logo.png')}
                style={styles.logo}
            />
            <View style={styles.messageIconContainer}>
                <Ionicons name="chatbubbles-outline" size={30} color="white" />
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    onPress={() => navigation.navigate('Home')}
                    style={{ fontSize: 26, fontWeight: 'bold' }}>Search Screen</Text>
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    logo: {
        width: '8%',  // Adjust the percentage according to your preference
        height: '8%',  // Adjust the percentage according to your preference
        position: 'absolute',
        top: '6%',  // Adjust the percentage according to your preference
        left: '10%',  // Adjust the percentage according to your preference
    },
    messageIconContainer: {
        position: 'absolute',
        top: '7%',
        right: '7%',
        zIndex: 1, // Ensure the icon is above other elements
    },
});
