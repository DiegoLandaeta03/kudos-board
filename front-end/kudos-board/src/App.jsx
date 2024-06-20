import './App.css'
import ActionItems from './ActionItems'
import BoardList from './BoardList'
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState('All');

  const handleCategory = (newCategory) => {
    setCategory(newCategory);
  }

  return (
    <div className='app'>
      <header>
        <h1 >Kudos Board</h1>
      </header>
      <main>
        <ActionItems onCategoryClick={handleCategory}/>
        <BoardList category={category}/>
      </main>
    </div>
  )
}

export default App
