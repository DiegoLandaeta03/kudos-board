import { useEffect, useState } from "react";
import './Modal.css';

function Modal({ close }) {
    const handleSubmit = (event) => {
        const form = event.target.form;
        const title = form.title.value;
        const category = form.category.value;
        console.log(`Title: ${title}, category: ${category}`);
        if (!title) {
            alert('Need to input title');
            return;
        }

        if (!category) {
            alert('Need to input category');
            return;
        }

        const newBoard = {
            title,
            category,
            author: form.author.value
        }

        try {
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBoard)
            }
            fetch(`http://localhost:3000/boards/add`, options)
        }
        catch (error) {
            console.log(error)
        }
        close()
    };

    const handleModalClose = (e) => {
        e.stopPropagation()
    }

    return (
        <div className="modal" onClick={close}>
            <div className="modal-content" onClick={handleModalClose}>
                <span onClick={close} className="close">&times;</span>
                <form className='createForm'>
                    <h2>Create Board</h2>
                    <p>Title</p>
                    <input id='title' name='title' placeholder="Input title..." ></input>
                    <p>Category</p>
                    <select name='category' id='category'>
                        <option value={''}>Select a category:</option>
                        <option value={'Celebration'}>Celebration</option>
                        <option value={'Thank you'}>Thank you</option>
                        <option value={'Inspiration'}>Inspiration</option>
                    </select>
                    <p>Author (Optional)</p>
                    <input id="author" className='input' name='author' placeholder="Input author..." ></input>
                    <div id='buttonSection'>
                        <button className='submit' type="button" value='Create Board' onClick={handleSubmit}>Create Board</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;