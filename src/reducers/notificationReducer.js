import { createSlice } from '@reduxjs/toolkit'


const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        setNotificationState(state, action) {
            console.log("is it here")
            return action.payload
        },
        setNul() {
            return ''
        }
    }
})


export const { setNul, setNotificationState} = notificationSlice.actions

export const setNotification = (notif, time) => {
    return async dispatch => {
        console.log('im tired', notif)
        dispatch(setNotificationState(notif))
        setTimeout(() => {
            console.log('dispatch setNul')
            dispatch(setNul())
        }, time * 1000)
    }
}

export default notificationSlice.reducer