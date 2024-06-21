import './Card.css';

const Card = ({ cardTitle, cardInfo, cardImage, id, cardOwner, deleteCard}) => {
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
                <button onClick={() => deleteCard(id)} className='delete'>Delete Board</button>
            </div>
        </div>
    );
}

export default Card;