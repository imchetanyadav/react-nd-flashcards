import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import {Ionicons} from '@expo/vector-icons'
import AddDeck from './AddDeck'

const Dashboard = props => (
    <View>
        {Object.keys(props.screenProps.decks).map(key => (
            <View key={key}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('DeckView', {
                            deckName: key,
                            title: props.screenProps.decks[key].title
                        })
                    }}
                >
                    <Text>{props.screenProps.decks[key].title}</Text>
                    <Text>{props.screenProps.decks[key].questions.length} cards</Text>
                </TouchableOpacity>
            </View>
        ))}
    </View>
)
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
