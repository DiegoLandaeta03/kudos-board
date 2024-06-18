import './ActionItems.css'
// import SearchForm from './SearchForm'

function ActionItems() {

    return (
    <div className='actionItems'>
        <form id='searchSection'>
            <input id='input' name='dataInput' placeholder="Search boards..." ></input>
        </form>
        <div className='navBar'>
            <button className='button'>All</button>
            <button className='button'>Recent</button>
            <button className='button'>Celebration</button>
            <button className='button'>Thank you</button>
            <button className='button'>Inspiration</button>
        </div>
        <button className='button'>Create a New Board</button>
    </div>
    )
}

export default ActionItems