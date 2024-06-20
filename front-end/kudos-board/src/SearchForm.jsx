import './SearchForm.css'
// import PropTypes from 'prop-types';

function SearchForm() {
    // const handleSearch = (event) => {
    //     if(event.key === 'Enter' || event.type === 'input') {
    //         event.stopPropagation();
    //         const submittedData = event.target.value; // simplified
    //         // searchData(submittedData);
    //     }
    // };

    return(
        <div id='searchSection'>
            <input id='input' type="search" placeholder="Search boards..." ></input>
        </div>
    );
}

export default SearchForm;