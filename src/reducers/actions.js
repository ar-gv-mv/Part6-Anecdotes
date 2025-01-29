import {setNotification, setNul} from './notificationReducer'

export const visibilityNotification = (message, time) => {
    return dispatch => {
        dispatch(setNotification(message))
        setTimeout(() => {
            console.log('dispatch setNul')
            dispatch(setNul())
        }, time * 1000)
    }
}

