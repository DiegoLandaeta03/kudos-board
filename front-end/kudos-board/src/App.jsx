import './App.css'
import ActionItems from './ActionItems'
import BoardList from './BoardList'
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const handleSearch = (newSearch) => {
    setSearch(newSearch);
  }

  const handleCategory = (newCategory) => {
    setCategory(newCategory);
  }

  return (
    <div className='app'>
      <header>
        <h1 >Kudos Board</h1>
      </header>
      <main>
        <ActionItems onSearch={handleSearch} onCategoryClick={handleCategory}/>
        <BoardList searchQuery={search} category={category}/>
      </main>
    </div>
  )
}

export default App
