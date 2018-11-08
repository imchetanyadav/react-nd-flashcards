import { Notifications, Permissions } from 'expo'
import { AsyncStorage } from 'react-native'

const NOTIFICATION_KEY = 'MobileFlashCards:notifications'

export function clearLocalNotification() { // Clear all local notifications
    return AsyncStorage.removeItem(NOTIFICATION_KEY).then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function createNotification() { // Notification config
    return {
        title: 'Test your memory',
        body: 'Attempt a quiz now',
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }

}

export function setLocalNotification() { // Set local notification if not set
    AsyncStorage.getItem(NOTIFICATION_KEY).then(JSON.parse).then(data => {
        if(data === null){
            Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
                if(status === 'granted') {
                    Notifications.cancelAllScheduledNotificationsAsync()

                    let tomorrow = new Date()
                    tomorrow.setDate(tomorrow.getDate() + 1)
                    tomorrow.setHours(20)
                    tomorrow.setMinutes(0)

                    Notifications.scheduleLocalNotificationAsync(
                        createNotification(),
                        {
                            time: tomorrow,
                            repeat: 'day'
                        }
                    )

                    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                }
            })
        }
    })
}