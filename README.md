This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

## To view it in action
* install all project dependencies with `npm install`
* start the development server with `npm start`
* scan QR code with expo app and enjoy

## Folder Structure
```bash
├── .babelrc # babel config.
├── App.js # app starting point.
├── app.json # app config.
├── App.text.js # app test file.
├── package.json # Package manager file.
├── README.md - This file.
├── helpers
│   ├── notifications.js # helper functions for notification.
│   ├── storage.js # helper functions for AsyncStorage.
│   ├── styles.js # styles used all over app.
└── components
    ├── AddCard.js # to add card to deck.
    ├── AddDeck.js # to create new deck.
    ├── Dashboard.js # contains created deck list.
    ├── DeckView.js # actions and details related to a specific deck
    ├── Home.js # contains logic for app stack navigation
    ├── Quiz.js # quiz screen
```
