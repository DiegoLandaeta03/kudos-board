import { useState } from 'react';
import './CardModal.css';
import { useParams } from 'react-router-dom'

function CardModal({ close }) {
    const params = useParams();
    const boardId = params.id;
    const [gifOptions, setOptions] = useState([])
    const [gifUrl, setGifUrl] = useState('')

    const handleSubmit = (event) => {
        const form = event.target.form;
        const cardTitle = form.title.value;
        const cardInfo = form.info.value;
        const cardImage = gifUrl;

        if (!cardTitle) {
            alert('Need to input title');
            return;
        }

        if (!cardInfo) {
            alert('Need to input description');
            return;
        }

        if (!cardImage) {
            alert('Need to pick GIF');
            return;
        }


        const newBoard = {
            cardTitle,
            cardInfo,
            cardImage,
            cardOwner: form.owner.value
        }

        try {
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBoard)
            }
            fetch(`http://localhost:3000/cards/add/${boardId}`, options)
        }
        catch (error) {
            console.log(error)
        }
        close()
    };

    const handleModalClose = (e) => {
        e.stopPropagation()
    }

    const handleSearch = (event) => {
        const submittedData = event.target.value;
        searchGifs(submittedData);
    };

    const searchGifs = async (search) => {
        try {
            const API_KEY = import.meta.env.VITE_API_KEY
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=6`)
            const gifData = await response.json()
            setOptions(gifData.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const handleImage = (url) => {
        setGifUrl(url);
    }

    return (
        <div className="modal" onClick={close}>
            <div className="modal-content" onClick={handleModalClose}>
                <span onClick={close} className="close">&times;</span>
                <form className='createForm'>
                    <h2>Create a New Card</h2>
                    <p>Title</p>
                    <input id='title' name='title' placeholder="Enter card title" ></input>
                    <p>Description</p>
                    <input id='info' name='info' placeholder="Enter card description" ></input>
                    <p>Pick Image</p>
                    <input id='searchGif' name='searchGif' onChange={handleSearch} placeholder="Search GIFs..." ></input>
                    <div id='gifs'>
                        {gifOptions?.map((gif, i) => (
                            <div key={i} className='gifContainer' onClick={() => handleImage(gif.images.fixed_height_downsampled.url)}>
                                <img className='gifImage' src={gif.images.fixed_height_downsampled.url} />
                            </div>
                        )
                        )}
                    </div>

                    {gifUrl ? (
                        <div>
                            <h3>GIF Selected:</h3>
                            <div id='selectedGif'>
                                <div className='gifContainer'>
                                    <img className='gifImage' src={gifUrl} />
                                </div>
                            </div>
                        </div>
                    ) : null}
                    <p>Owner</p>
                    <input id="owner" className='input' name='owner' placeholder="Enter owner (optional)" ></input>
                    <div id='buttonSection'>
                        <button className='submit' type="button" value='Create Card' onClick={handleSubmit}>Create Card</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CardModal;