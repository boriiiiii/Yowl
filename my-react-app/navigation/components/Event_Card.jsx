import React from 'react';
import { View, Text, Image } from 'react-native';
import images from '../../assets/event_image';

const EventCard = ({ organizerName, imagePath, date, title, city, theme, seatsAvailable }) => {
    const imageSource = images[imagePath] || images['default'];

    return (
        <View className="m-4 p-4 border border-gray-200 rounded-lg bg-white shadow">
            <Image source={imageSource} className="h-40 w-full rounded-lg" />
            <Text className="text-lg font-bold mt-2">{title}</Text>
            <Text className="text-sm text-gray-600">Organize by: {organizerName}</Text>
            <Text className="text-sm text-gray-600">Date: {date}</Text>
            <Text className="text-sm text-gray-600">City: {city}</Text>
            <Text className="text-sm text-gray-600">Theme: {theme}</Text>
            <Text className="text-sm text-gray-600">Place available: {seatsAvailable}</Text>
        </View>
    );
};

export default EventCard;
