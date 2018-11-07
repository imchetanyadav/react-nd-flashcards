import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './components/Dashboard'
import DeckView from './components/DeckView'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'

export default class App extends React.Component {
  state = {
    title: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>App js</Text>
        <Dashboard />
        <AddDeck />
        <DeckView />
        <AddCard />
        <Quiz />
      </View>
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
