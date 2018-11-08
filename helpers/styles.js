import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 24,
        textAlign: 'center',
        padding: 12
    },
    subtitle: {
        color: '#ced0d0',
        fontSize: 16,
        textAlign: 'center',
        padding: 5
    },
    container: {
        flex: 1
    },
    formInput: {
        borderColor: 'grey',
        borderWidth:  Platform.OS === 'ios' ? 1 : 0,
        paddingBottom: 12,
        paddingLeft: 6,
        paddingTop: 12,
        marginLeft: 12,
        marginRight: 12
    },
    button: {
        backgroundColor: '#f4511e',
        borderRadius: 2,
        margin: 12,
        paddingBottom: 12,
        paddingTop: 12
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
});