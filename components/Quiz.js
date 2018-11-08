import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CardFlip from 'react-native-card-flip';
import { styles } from '../helpers/styles';

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
            <View style={styles.container}>
                {this.state.counter < this.state.questions.length ?
                    <View style={{flexGrow: 1}}>
                        <Text style={{textAlign: 'center', marginTop: 12}}>{`${this.state.counter+1}/${this.state.questions.length}`}</Text>
                        <View style={quizStyles.container}>
                            <CardFlip style={quizStyles.cardContainer} ref={(card) => this.card = card} >
                                <TouchableOpacity style={[quizStyles.card, quizStyles.card1]} onPress={() => {this.card.flip(); this.toggleAnswerVisible();}} >
                                    <Text style={quizStyles.label}>{this.state.questions[this.state.counter].question}</Text>
                                    <Text>View Answer</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[quizStyles.card, quizStyles.card2]} onPress={() => {this.card.flip(); this.toggleAnswerVisible();}} >
                                    <Text style={quizStyles.label}>{this.state.questions[this.state.counter].answer}</Text>
                                    <Text>View Question</Text>
                                </TouchableOpacity>
                            </CardFlip>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={[styles.button, {backgroundColor: 'green'}]}
                                onPress={() => { this.handleAnswerChoice(true) }}
                            >
                                <Text style={styles.buttonText}>Correct</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, {backgroundColor: 'red'}]} 
                                onPress={() => { this.handleAnswerChoice(false) }}
                            >
                                <Text style={styles.buttonText}>Incorrect</Text>
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

const quizStyles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardContainer:{
      width: 320,
      height: 350
    },
    card:{
      width: 320,
      height: 320,
      backgroundColor: '#FE474C',
      borderRadius: 5,
      shadowColor: 'rgba(0,0,0,0.5)',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity:0.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card1: {
      backgroundColor: '#FE474C',
    },
    card2: {
      backgroundColor: '#FEB12C',
    },
    label: {
      textAlign: 'center',
      fontSize: 28,
      fontFamily: 'System',
      color: '#ffffff',
    },
  });

export default Quiz;
