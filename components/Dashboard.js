import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Dashboard = props => (
    <View style={{marginTop: 40}}>
        <Text>Dashboard</Text>
        {Object.keys(props.screenProps.decks).map(key => (
            <View key={key}>
                <Text>{props.screenProps.decks[key].title}</Text>
                <Text>{props.screenProps.decks[key].questions.length} cards</Text>
            </View>
        ))}
    </View>
)

export default Dashboard;