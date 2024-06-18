import './Board.css';
// import PropTypes from 'prop-types';
// import { useState } from "react";

const Board = () => {
    // const [likeButton, setLike] = useState('🤍');
    
    // function liked(){
    //     if(likeButton === '❤️'){
    //         setLike('🤍')
    //     }
    //     else{
    //         setLike('❤️');
    //     }
    // }


    return(
        <div className="board">
            <img className="boardImage" src='https://picsum.photos/200/300?random=4' alt={`Image`} />
            <div className="boardDetails">
                    <h2 className="boardName">Congrats!</h2>
                    <p className="genre">Celebration</p>
            </div>
            <div className='buttons'>
                <button className='viewBoard'>View Board</button>
                <button className='delete'>Delete Board</button>
            </div>
        </div>
    );
}

export default Board;