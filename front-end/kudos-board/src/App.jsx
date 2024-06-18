import './App.css'
import ActionItems from './ActionItems'
import BoardList from './BoardList'

function App() {

  return (
    <div className='app'>
      <header>
        <h1 >Kudos Board</h1>
      </header>
      <main>
        <ActionItems />
        <BoardList />
      </main>
    </div>
  )
}

export default App
