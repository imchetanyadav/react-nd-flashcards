import { createStackNavigator } from 'react-navigation'
import Dashboard from './Dashboard'
import DeckView from './DeckView'
import AddCard from './AddCard'
import Quiz from './Quiz'

export default createStackNavigator(
  {
      Flashcards: Dashboard,
      DeckView: DeckView,
      AddCard: AddCard,
      Quiz: Quiz,
  },
  {
      initialRouteName: 'Flashcards',
      navigationOptions: ({ navigation }) => ({
          title: (navigation.state.params && navigation.state.params.title ) ? navigation.state.params.title : navigation.state.routeName,
          headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
      })
  }
);
