import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Dashboard from './components/Dashboard'
import DeckView from './components/DeckView'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import Home from './components/Home';

export default class App extends React.Component {
  state = {
    decks: {}
  }
  addDeck = deckName => {
    this.setState( prevState => ({ decks: {
      ...prevState.decks,
      [deckName]: {
        title: deckName,
        questions: []
      }
    }}))
    Alert.alert('Deck Added');

  }
  addCard = (deckName, question, answer) => {
    this.setState( prevState => ({ decks: {
      ...prevState.decks,
      [deckName]: {
        ...prevState.decks[deckName],
        questions: prevState.decks[deckName].questions.concat({ question, answer }),
      }
    }}))
    Alert.alert('Card Added');
  }

  render() {
    return (
      <Home screenProps={{decks: this.state.decks, addDeck: this.addDeck}} />
      // <View style={styles.container}>
      //   <Text>App js</Text>
      //   <Dashboard decks={this.state.decks} />
      //   <AddDeck addDeck={this.addDeck} />
      //   <DeckView />
      //   <AddCard addCard={this.addCard} />
      //   <Quiz />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
