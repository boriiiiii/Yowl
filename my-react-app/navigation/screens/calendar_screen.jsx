import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import { useLayoutEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CalendarScreen({ navigation }) {
    const navigation_setting = useNavigation();

    useLayoutEffect(() => {
        navigation_setting.setOptions({
            headerShown: false
        });
    });

    // Get current date information
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    // Function to generate an array of day numbers for the current month
    const generateDaysArray = () => {
        const firstDay = new Date(currentYear, currentDate.getMonth(), 1);
        const lastDay = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate();
        const startingDay = firstDay.getDay();

        const daysArray = [];

        // Fill the array with empty slots until the first day of the month
        for (let i = 0; i < startingDay; i++) {
            daysArray.push('');
        }

        // Fill the array with day numbers
        for (let i = 1; i <= lastDay; i++) {
            daysArray.push(i);
        }

        return daysArray;
    };

    const daysArray = generateDaysArray();

    // Array of day names
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Group days into rows of 7
    const groupedDays = [];
    while (daysArray.length > 0) {
        groupedDays.push(daysArray.splice(0, 7));
    }

    return (
        <ImageBackground
            source={require('../../assets/app/background.png')}
            style={{ flex: 1, resizeMode: 'cover', justifyContent: 'flex-start', alignItems: 'center' }}
        >
            {/* Logo at the top-left corner */}
            <Image
                source={require('../../assets/app/logo.png')}
                style={styles.logo}
            />
            <View style={styles.messageIconContainer}>
                <Ionicons name="chatbubbles-outline" size={30} color="white" />
            </View>

            <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'white', marginBottom: 95 }}>
                {currentMonth} {currentYear}
            </Text>

            {/* Day names row */}
            <View style={styles.dayNamesContainer}>
                {dayNames.map((dayName, index) => (
                    <View key={index} style={styles.dayNameContainer}>
                        <Text style={styles.dayNameText}>{dayName}</Text>
                    </View>
                ))}
            </View>

            {/* Calendar grid */}
            <View style={styles.calendarContainer}>
                {groupedDays.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.dayRow}>
                        {row.map((day, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.dayContainer,
                                    day === '' ? styles.emptyDay : null,
                                ]}
                            >
                                {day !== '' && (
                                    <Text style={styles.dayText}>{day}</Text>
                                )}
                            </View>
                        ))}
                    </View>
                ))}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: '8%',
        height: '8%',
        position: 'absolute',
        top: '6%',
        left: '10%',
    },
    messageIconContainer: {
        position: 'absolute',
        top: '7%',
        right: '7%',
        zIndex: 1,
    },
    dayNamesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginBottom: 15,
    },
    dayNameContainer: {
        width: '12%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dayNameText: {
        color: 'white',
        fontSize: 16,
    },
    calendarContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 10,
    },
    dayRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dayContainer: {
        width: '12%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 17,
    },
    emptyDay: {
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
    dayText: {
        color: 'white',
        fontSize: 20,
    },
});
