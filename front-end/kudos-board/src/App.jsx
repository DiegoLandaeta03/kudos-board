import './App.css'
import ActionItems from './ActionItems'
import BoardList from './BoardList'
import { useState } from 'react';
import Modal from './Modal';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);

  const handleSearch = (newSearch) => {
    setSearch(newSearch);
  }

  const handleCategory = (newCategory) => {
    setCategory(newCategory);
  }

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <Router>
      <Routes>
        <Route path='/boards' element={
          <div className='app'>
            <header>
              <h1 >Kudos Board</h1>
            </header>
            <main>
              <ActionItems onSearch={handleSearch} onCategoryClick={handleCategory} createCard={openModal} />
              {modalOpen ? (
                <Modal close={() => closeModal()} />
              ) : null}
              <BoardList searchQuery={search} category={category} />
            </main>
          </div>
        } />
        <Route path='/cards/:id' element={
          <div className='app'>
            <header>
              <h1>Board page</h1>
            </header>
            <main>
              <Link to='/boards'>
                <button>Go back</button>
              </Link>
            </main>
          </div>
        }/>
      </Routes>
    </Router>
  )
}

export default App
