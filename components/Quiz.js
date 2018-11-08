import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
    }
    render() {
        return (
            <View>
                <Text>Quiz</Text>
                {this.state.counter < this.state.questions.length ?
                    <View>
                        <Text>{`${this.state.counter}/${this.state.questions.length}`}</Text>
                        {!this.state.answerVisible ? 
                            <Text>{this.state.questions[this.state.counter].question}</Text>
                        :
                            <Text>{this.state.questions[this.state.counter].answer}</Text>
                        }
                        <TouchableOpacity onPress={() => { this.toggleAnswerVisible() }} >
                            <Text>{this.state.answerVisible ? 'Question' : 'Answer'}</Text>
                        </TouchableOpacity>
                
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

export default Quiz;