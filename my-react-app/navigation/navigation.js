// export default Navigation;

import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

// Screens
import HomeScreen from './screens/home_screen';
import SearchScreen from './screens/search_screen';
import AddScreen from './screens/add_screen';
import CalendarScreen from './screens/calendar_screen';
import ProfileScreen from './screens/profile_screen';

// Screen names
const homeName = 'Home';
const searchName = 'Search';
const addName = 'Add';
const calendarName = 'Calendar';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    NavigationContainer: {
      flex: 1,
    },
    TabNavigator: {
      height: '100px',
      color: 'blue'
    },
    TabIcon: {
      marginBottom: 2,
    },
    TabLabel: {
      fontSize: 10,
    },
    TabActiveColor: {
      color: '#A58C4D',
    },
    TabInactiveColor: {
      color: 'grey',
    },
  });
  
  function Navigation() {
    return (
      <NavigationContainer style={styles.NavigationContainer}>
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;
  
              if (rn === homeName) {
                iconName = 'flash-outline';
              } else if (rn === searchName) {
                iconName = 'search-outline';
              } else if (rn === addName) {
                iconName = 'add-circle-outline';
              } else if (rn === calendarName) {
                iconName = 'calendar-clear-outline';
              } else if (rn === profileName) {
                iconName = 'person-outline';
              }
  
              return <Ionicons name={iconName} size={size} color={focused ? styles.TabActiveColor.color : styles.TabInactiveColor.color} style={styles.TabIcon} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: styles.TabActiveColor.color,
            inactiveTintColor: styles.TabInactiveColor.color,
            labelStyle: styles.TabLabel,
          }}
        >
          <Tab.Screen name={homeName} component={HomeScreen} />
          <Tab.Screen name={searchName} component={SearchScreen} />
          <Tab.Screen name={addName} component={AddScreen} />
          <Tab.Screen name={calendarName} component={CalendarScreen} />
          <Tab.Screen name={profileName} component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigation;
