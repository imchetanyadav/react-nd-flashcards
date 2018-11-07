import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import {Ionicons} from '@expo/vector-icons'
import Dashboard from './Dashboard'
import DeckView from './DeckView'
import AddDeck from './AddDeck'

export default createBottomTabNavigator(
    {
      Decks: Dashboard,
      AddDeck: AddDeck,
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Decks') {
            iconName = `md-list-box`;
          } else if (routeName === 'AddDeck') {
            iconName = `ios-add-circle${focused ? '' : '-outline'}`;
          }
          return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
);