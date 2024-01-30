// Date.jsx
import { Text, View, TouchableOpacity } from 'react-native'
import moment from 'moment'

const Date = ({ date, onSelectDate, selected }) => {
    const day = moment(date).format('ddd');
    const dayNumber = moment(date).format('D');
    const fullDate = moment(date).format('YYYY-MM-DD');

    return (
        <TouchableOpacity
            onPress={() => onSelectDate(fullDate)}
            className={`m-0.5 p-2 items-center h-18 w-16 rounded-md bg-transparent`} // Taille réduite
        >
            <Text className={`text-sm uppercase ${selected === fullDate ? 'font-bold' : 'font-normal'} text-white`}>
                {day}
            </Text>
            <View className="h-1.5" />
            <Text className={`text-xs ${selected === fullDate ? 'font-bold' : 'font-normal'} text-white`}>
                {dayNumber}
            </Text>
        </TouchableOpacity>
    )
}

export default Date
