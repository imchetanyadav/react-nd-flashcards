import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import Home from './components/Home';
import { getDecks, saveDeckTitle, addCardToDeck } from './helpers/storage'
import { setLocalNotification } from './helpers/notifications'

export default class App extends React.Component {
  state = {
    decks: {}
  }
  addDeck = (deckName, callback) => {
    saveDeckTitle(deckName).then(() => { // Add deck to AsyncStorage
      this.setState( prevState => ({ decks: { // Update state after AsyncStorage updated
        ...prevState.decks,
        [deckName]: {
          title: deckName,
          questions: []
        }
      }}))
      Alert.alert('Deck Added');
      callback(); // Callback function called added state updated
    }).catch(error => {
      console.log(error)
      Alert.alert('Deck could not added');
    })
  }
  addCard = (deckName, question, answer, callback) => {
    addCardToDeck(deckName, { question, answer }).then(() => { // Add card to AsyncStorage
      this.setState( prevState => ({ decks: { // Update state after card added to AsyncStorage
        ...prevState.decks,
        [deckName]: {
          ...prevState.decks[deckName],
          questions: prevState.decks[deckName].questions.concat({ question, answer }),
        }
      }}))
      Alert.alert('Card Added');
      callback(); // Callback function called added state updated
    }).catch(error => {
      console.log(error)
      Alert.alert('Card could not added');
    })
  }

  componentDidMount(){
    setLocalNotification() // set local notifications
    getDecks().then(decks => { // get decks from AsyncStorage
      this.setState({ decks })
    })
  }

  render() {
    return (
      <Home screenProps={{decks: this.state.decks, addDeck: this.addDeck, addCard: this.addCard}} />
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
