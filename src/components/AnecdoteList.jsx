import { useSelector, useDispatch } from 'react-redux'
import {voting} from '../reducers/anecdoteReducer'

const AnecdoteList = () => {

  const anecdotes = useSelector(({filter, anecdotes}) => {
    const sortedAnecdotes = [...anecdotes]
    sortedAnecdotes.sort((a,b) => b.votes - a.votes)

    if (filter === '') {
      return sortedAnecdotes
    } else {
      return sortedAnecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    }
  })

  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(voting(id))
  }

  return (
    <div>
        {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
            </div>
        )}
    </div>
  )
}

export default AnecdoteList