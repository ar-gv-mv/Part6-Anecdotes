import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

// const getId = () => (100000 * Math.random()).toFixed(0)


const anecdoteSlice = createSlice({
  name: 'anecdote', 
  initialState: [],
  reducers: {
    voting(state, action) {
      const content = action.payload
      console.log('whatta', content)
      const anecdote = state.find(n => n.id === content.id)
      if (anecdote) {
        anecdote.votes = content.votes
      }
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    appendNote(state, action) {
      state.push(action.payload)
    }
  }
})

export const { voting, setAnecdotes, appendNote } = anecdoteSlice.actions

export const initializeAnecdote = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendNote(newAnecdote))
  }
}

export const voteAnecdote = anecdote => {
  return async dispatch => {
    console.log('heh', anecdote)
    const voteUpdated = {...anecdote, votes: anecdote.votes+1}
    const anecdoteUpd = await anecdoteService.update(voteUpdated)
    console.log('updated', anecdoteUpd)
    dispatch(voting(anecdoteUpd))
  }
}


export default anecdoteSlice.reducer