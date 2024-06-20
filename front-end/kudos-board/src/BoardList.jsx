import './BoardList.css'
import Board from './Board'
import { useEffect, useState } from 'react'

function BoardList({ category }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const options = {
            method: "GET",
        }
        fetch(`http://localhost:3000/boards/${category}`, options)
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => console.error(err))
    }, [data, category])

    return (
        <div className='boardList'>
            {data?.map(board => (
                <Board boardTitle={board.title} image={board.imageSrc}
                    key={board.id} genre={board.category} />)
            )}
        </div>
    )
}

export default BoardList
