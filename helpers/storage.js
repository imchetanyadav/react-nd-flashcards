import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'MobileFlashCards'

export function getDecks() { // Get decks from AsyncStorage
    return AsyncStorage.getItem(STORAGE_KEY).then(results => JSON.parse(results))
}

export function getDeck(id) { // Get details of a deck from id
    return AsyncStorage.getItem(STORAGE_KEY).then(results => {
        const data = JSON.parse(results)
        return data[id];
    })
}

export function saveDeckTitle(title) { // Save new deck title to AsyncStorage
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [title]: {
            title,
            questions: []
        }
    }))
}

export function addCardToDeck(title, card) { // Add card to deck
    return AsyncStorage.getItem(STORAGE_KEY).then(results => {
        const data = JSON.parse(results)
        data[title] = {
            ...data[title],
            questions: data[title].questions.concat(card)
        }
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    })
}