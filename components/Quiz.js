import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CardFlip from 'react-native-card-flip';

class Quiz extends React.Component {
    state = {
        counter: 0,
        score: 0,
        answerVisible: false,
        questions: this.props.screenProps.decks[this.props.navigation.state.params.deckName].questions
    }
    toggleAnswerVisible = () => {
        this.setState( prevState => ({ answerVisible: !prevState.answerVisible }))
    }
    handleAnswerChoice = correctChoice => {
        if(correctChoice)
            this.setState(prevState => ({ score: prevState.score + 1}))
        this.setState(prevState => ({ counter: prevState.counter + 1, answerVisible: false }))
        if(this.state.answerVisible)
            this.card.flip()
    }
    render() {
        return (
            <View>
                <Text>Quiz</Text>
                {this.state.counter < this.state.questions.length ?
                    <View style={styles.container}>
                        <Text>{`${this.state.counter+1}/${this.state.questions.length}`}</Text>
                        <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
                            <TouchableOpacity style={[styles.card, styles.card1]} onPress={() => {this.card.flip(); this.toggleAnswerVisible();}} >
                                <Text>{this.state.questions[this.state.counter].question}</Text>
                                <Text>{this.state.answerVisible ? 'Question' : 'Answer'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.card, styles.card2]} onPress={() => {this.card.flip(); this.toggleAnswerVisible();}} >
                                <Text>{this.state.questions[this.state.counter].answer}</Text>
                                <Text>{this.state.answerVisible ? 'Question' : 'Answer'}</Text>
                            </TouchableOpacity>
                        </CardFlip>
                
                        <View>
                            <TouchableOpacity onPress={() => { this.handleAnswerChoice(true) }} >
                                <Text>Correct</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.handleAnswerChoice(false) }} >
                                <Text>Incorrect</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                : 
                    <View>
                        <Text>Your score: {this.state.score}</Text>
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    cardContainer:{
      width: 320,
      height: 470,
    },
    card:{
      width: 320,
      height: 470,
      backgroundColor: '#FE474C',
      borderRadius: 5,
      shadowColor: 'rgba(0,0,0,0.5)',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity:0.5,
    },
    card1: {
      backgroundColor: '#FE474C',
    },
    card2: {
      backgroundColor: '#FEB12C',
    },
    label: {
      lineHeight: 470,
      textAlign: 'center',
      fontSize: 55,
      fontFamily: 'System',
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });

export default Quiz;
