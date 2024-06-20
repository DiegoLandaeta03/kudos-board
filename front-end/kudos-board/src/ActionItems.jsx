import './ActionItems.css'

function ActionItems({ onSearch, onCategoryClick }) {
    const handleSearch = (event) => {
        const submittedData = event.target.value;
        onSearch(submittedData);
    };

    const handleCategory = (event) => {
        const submittedData = event.target.value;;
        onCategoryClick(submittedData);
    };

    return (
        <div className='actionItems'>
            <div id='searchSection'>
                <input onInput={handleSearch} id='input' type="search" placeholder="Search boards..." ></input>
            </div>
            <div className='navBar'>
                <button onClick={handleCategory} className='button' value={'All'}>All</button>
                <button onClick={handleCategory} className='button' value={'Recent'}>Recent</button>
                <button onClick={handleCategory} className='button' value={'Celebration'}>Celebration</button>
                <button onClick={handleCategory} className='button' value={'Thank you'}>Thank you</button>
                <button onClick={handleCategory} className='button' value={'Inspiration'}>Inspiration</button>
            </div>
            <button className='button'>Create a New Board</button>
        </div>
    )
}

export default ActionItems
