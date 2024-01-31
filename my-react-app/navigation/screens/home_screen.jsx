import * as React from 'react';
import {useLayoutEffect, useState} from 'react';
import {ImageBackground, View, Image, ScrollView, Text} from 'react-native';

import Calendar from "../components/Calendar";
import EventCard from "../components/Event_Card";
import {useNavigation} from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
    const [selectedDate, setSelectedDate] = useState(null);

    const navigation_setting = useNavigation()

    useLayoutEffect(() => {
        navigation_setting.setOptions({
            headerShown : false
        })
    })
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../../assets/background.png')}
                className="flex-1"
                resizeMode="cover"
            >
                <View style={{ marginTop:110 }}>
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
                    date="2024-01-30 18:00"
                    title="Concert de Rock"
                    city="Paris"
                    theme="Musique"
                    seatsAvailable="100"
                />
                <EventCard
                    organizerName="John Doe"
                    imagePath="clubbing"
                    date="2024-01-30 18:00"
                    title="Concert de Rock"
                    city="Paris"
                    theme="Musique"
                    seatsAvailable="100"
                />
                <EventCard
                    organizerName="John Doe"
                    imagePath="antagonist"
                    date="2024-01-30 18:00"
                    title="Concert de Rock"
                    city="Paris"
                    theme="Musique"
                    seatsAvailable="100"
                />
            </ScrollView>
            </ImageBackground>
        </View>
    );
}