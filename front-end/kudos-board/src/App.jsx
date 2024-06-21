import './App.css'
import ActionItems from './ActionItems'
import BoardList from './BoardList'
import CardList from './CardList';
import CardModal from './CardModal';
import { useState } from 'react';
import Modal from './Modal';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [cardModal, setCardModal] = useState(false);

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

  const openCardModal = () => {
    setCardModal(true);
  }

  const closeCardModal = () => {
    setCardModal(false);
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
            <footer>
              <p id='contact'> Contact us at: contactus@kudosboard.com | (805) 324 - 1624</p>
              <p> </p>
              <p> Copyright © 2024 Kudos Board, Inc.</p>
            </footer>
          </div>
        } />
        <Route path='/cards/:id' element={
          <div className='app'>
            <header>
              <h1>Board Page</h1>
            </header>
            <main>
              <Link to='/boards'>
                <button className='arrow-button'></button>
              </Link>
              <CardList openModal={openCardModal} />
              {cardModal ? (
                <CardModal close={() => closeCardModal()} />
              ) : null}
            </main>
            <footer>
              <p id='contact'> Contact us at: contactus@kudosboard.com | (805) 324 - 1624</p>
              <p> </p>
              <p> Copyright © 2024 Kudos Board, Inc.</p>
            </footer>
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
