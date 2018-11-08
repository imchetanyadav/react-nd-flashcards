import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'TEMPMobileFlashCards'

export function getDecks() {
    return AsyncStorage.getItem(STORAGE_KEY).then(results => JSON.parse(results))
}

export function saveDeckTitle(title) {
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [title]: {
            title,
            questions: []
        }
    }))
}
