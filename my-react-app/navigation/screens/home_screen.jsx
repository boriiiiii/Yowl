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
                source={require('../../assets/app/background.png')}
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
            </ScrollView>
            </ImageBackground>
        </View>
    );
}