import React from 'react'
import { StyleSheet, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import {Ionicons} from '@expo/vector-icons'
import AddDeck from './AddDeck'

const Dashboard = props => (
    <View>
        <FlatList
          data={Object.keys(props.screenProps.decks).map(key => ({
              key: props.screenProps.decks[key].title,
              title: props.screenProps.decks[key].title,
              questions: props.screenProps.decks[key].questions
          }))}
          renderItem={({item}) => (
            <View style={[styles.deck]}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('DeckView', {
                            deckName: item.key,
                            title: item.title
                        })
                    }}
                >
                    <Text style={styles.deckTitle}>{item.title}</Text>
                    <Text style={styles.deckSubtitle}>{item.questions.length} cards</Text>
                </TouchableOpacity>
            </View>
          )}
        />
    </View>
)

const styles = StyleSheet.create({
    deck: {
        borderTopColor: '#cccccc',
        borderTopWidth: 1,
        paddingBottom: 18,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 18
    },
    deckTitle: {
        fontSize: 20,
        paddingBottom: 3
    },
    deckSubtitle: {
        color: '#ced0d0'
    }
});


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
