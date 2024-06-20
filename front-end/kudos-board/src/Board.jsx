import './Board.css';

const Board = ({ image, boardTitle, genre, deleteBoard, id}) => {
    return (
        <div className="board">
            <img className="boardImage" src={image} alt={`Image`} />
            <div className="boardDetails">
                <h2 className="boardName">{boardTitle}</h2>
                <p className="genre">{genre}</p>
            </div>
            <div className='buttons'>
                <button className='viewBoard'>View Board</button>
                <button onClick={() => deleteBoard(id)} className='delete'>Delete Board</button>
            </div>
        </div>
    );
}

export default Board;