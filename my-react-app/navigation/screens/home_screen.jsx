import * as React from 'react';
import { useLayoutEffect, useState } from 'react';
import { ImageBackground, View, Image, ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Calendar from "../components/Calendar";
import EventCard from "../components/Event_Card";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
    const [selectedDate, setSelectedDate] = useState(null);

    const navigation_setting = useNavigation();

    useLayoutEffect(() => {
        navigation_setting.setOptions({
            headerShown: false
        });
    });

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../../assets/app/background.png')}
                style={{ flex: 1, resizeMode: 'cover' }}
            >
                {/* Logo at the top-left corner */}
                <Image
                    source={require('../../assets/app/logo.png')}
                    style={styles.logo}
                />

                {/* Message Icon at the top-left corner */}
                <View style={styles.messageIconContainer}>
                    <Ionicons name="chatbubbles-outline" size={30} color="white" />
                </View>

                <View style={{ marginTop: 110 }}>
                    <Calendar
                        className=""
                        onSelectDate={setSelectedDate}
                        selected={selectedDate}
                    />
                </View>
            <ScrollView>
                <EventCard
                    organizerName="John Doe"
                    imagePath="cocktails"
                    date="12/01  18h"
                    title="Concert de Rock"
                    city="Paris"
                    theme="Music"
                    seatsAvailable="100"
                />
                <EventCard
                    organizerName="Annana"
                    imagePath="clubbing"
                    date="22/01    20h-6h"
                    title="SOIREE DE FOU"
                    city="Bordeaux"
                    theme="Music"
                    seatsAvailable="70"
                />
                <EventCard
                    organizerName="John Doe"
                    imagePath="antagonist"
                    date="13/02   19h"
                    title="Concert de Rock"
                    city="Paris"
                    theme="Dance"
                    seatsAvailable="30"
                />
            </ImageBackground>
        </View>
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
