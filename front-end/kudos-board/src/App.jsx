import './App.css'
import ActionItems from './ActionItems'
import BoardList from './BoardList'
import { useState } from 'react';
import Modal from './Modal';

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
    <div className='app'>
      <header>
        <h1 >Kudos Board</h1>
      </header>
      <main>
        <ActionItems onSearch={handleSearch} onCategoryClick={handleCategory} createCard={openModal}/>
        {modalOpen ? (
          <Modal close={() => closeModal()} />
        ) : null}
        <BoardList searchQuery={search} category={category} />
      </main>
    </div>
  )
}

export default App
