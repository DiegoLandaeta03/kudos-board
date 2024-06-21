import './CardList.css'
import { useParams } from 'react-router-dom'
import Card from './Card'

import { useEffect, useState } from 'react'

function CardList() {
    const [data, setData] = useState([]);
    const [deleteId, setDelete] = useState('')
    const params = useParams();
    const boardId = params.id
    const [title, setTitle] = useState('')

    const handleDelete = (newDelete) => {
        setDelete(newDelete);
    }

    useEffect(() => {
        if (deleteId != '') {
            const options = {
                method: "DELETE",
            }
            fetch(`http://localhost:3000/cards/delete/${deleteId}`, options)
            setDelete('')
        }
        else {
            const options = {
                method: "GET",
            }
            fetch(`http://localhost:3000/cards/${boardId}`, options)
                .then(response => response.json())
                .then(response => setData(response))
                .catch(err => console.error(err));

            const titleOptions = {
                method: "GET",
            }
            fetch(`http://localhost:3000/boards/id/${boardId}`, titleOptions)
                .then(response => response.json())
                .then(response => setTitle(response.title))
                .catch(err => console.error(err));
        }
    }, [data, deleteId])

    return (
        <div>
            <div className='title'>
                <h2>{title}</h2>
            </div>
            <div className='cardList'>
                {data?.map(card => (
                    <Card cardTitle={card.cardTitle} cardInfo={card.cardInfo} cardImage={card.cardImage}
                        key={card.id} id={card.id} cardOwner={card.cardOwner} deleteCard={handleDelete} />)
                )}
            </div>
        </div>
    )
}

export default CardList
