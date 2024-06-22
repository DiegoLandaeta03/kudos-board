import './Card.css';

const Card = ({ cardTitle, cardInfo, cardImage, id, cardOwner, upVotes, deleteCard }) => {
    const handleUpVote = () => {
        try {
            const options = {
                method: "PATCH",
            }
            fetch(`http://localhost:3000/cards/${id}`, options)
        }
        catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="card">
            <div className="cardDetails">
                <h2 className="cardName">{cardTitle}</h2>
                <p className="info">{cardInfo}</p>
            </div>
            <div className='imageSection'>
                <img className="cardImage" src={cardImage} alt={`Image`} />
            </div>
            <div className='buttons'>
                <button className='upVote' onClick={handleUpVote} >Upvote: {upVotes}</button>
                <button onClick={() => deleteCard(id)} className='delete'>Delete Board</button>
            </div>
        </div>
    );
}

export default Card;