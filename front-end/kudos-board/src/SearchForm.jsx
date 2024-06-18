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
        <form id='searchSection'>
            <input id='input' name='dataInput' placeholder="Search boards..." ></input>
        </form>
    );
}

export default SearchForm;