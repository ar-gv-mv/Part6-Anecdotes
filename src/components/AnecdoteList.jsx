import { useSelector, useDispatch } from 'react-redux'
import {voting} from '../reducers/anecdoteReducer'
import { visibilityNotification} from '../reducers/actions'

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

  const vote = (id, content) => {
    console.log('vote', id)
    dispatch(voting(id))
    console.log(content)
    dispatch(visibilityNotification(content, 5))
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
                <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
            </div>
            </div>
        )}
    </div>
  )
}

export default AnecdoteList