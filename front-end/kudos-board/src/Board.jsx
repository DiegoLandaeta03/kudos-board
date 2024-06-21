import './Board.css';
import { Link } from 'react-router-dom'

const Board = ({ image, boardTitle, genre, deleteBoard, id}) => {
    return (
        <div className="board">
            <img className="boardImage" src={image} alt={`Image`} />
            <div className="boardDetails">
                <h2 className="boardName">{boardTitle}</h2>
                <p className="genre">{genre}</p>
            </div>
            <div className='buttons'>
                <Link to={`/cards/${id}`}>
                    <button className='viewBoard'>View Board</button>
                </Link>
                <button onClick={() => deleteBoard(id)} className='delete'>Delete Board</button>
            </div>
        </div>
    );
}

export default Board;