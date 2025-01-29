import { createSlice } from '@reduxjs/toolkit'


const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        setNotification(state, action) {
            return action.payload
        },
        setNul() {
            return ''
        }
    }
})

export const {setNotification, setNul} = notificationSlice.actions
export default notificationSlice.reducer