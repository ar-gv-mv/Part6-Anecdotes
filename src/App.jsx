import AnecdoteForm from './components/AnecdoteForm.jsx'
import AnecdoteList from './components/AnecdoteList.jsx'
import Filter from './components/Filtering.jsx'
import Notification from './components/Notification.jsx'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App