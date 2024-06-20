import './BoardList.css'
import Board from './Board'
import { useEffect, useState } from 'react'

function BoardList({ category }) {
    const [data, setData] = useState([]);
    const [deleteId, setDelete] = useState('')

    const handleDelete = (newDelete) => {
        setDelete(newDelete);
    }

    useEffect(() => {
        if(deleteId != ''){
            const options = {
                method: "DELETE",
            }
            fetch(`http://localhost:3000/boards/delete/${deleteId}`, options)
            setDelete('')
        }
        else{
            const options = {
                method: "GET",
            }
            fetch(`http://localhost:3000/boards/${category}`, options)
                .then(response => response.json())
                .then(response => setData(response))
                .catch(err => console.error(err))
        }
    }, [data, deleteId])

    return (
        <div className='boardList'>
            {data?.map(board => (
                <Board boardTitle={board.title} image={board.imageSrc}
                    key={board.id} id={board.id} genre={board.category} deleteBoard={handleDelete}/>)
            )}
        </div>
    )
}

export default BoardList
