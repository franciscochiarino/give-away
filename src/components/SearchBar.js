import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

function SearchBar(props) {

    const [userSearch, setUserSearch] = useState('');

    const handleSearch = e => {
        setUserSearch(e.target.value);
    }

    const dispatchUserSearch = (e) => {
        e.preventDefault();

        props.dispatch({
            type: 'SEARCH_TERM',
            payload: userSearch
        })

        setUserSearch('');
    }

    return (
        <div className="topBar">
            <img src={require("../assets/icons/menu_white_24dp.png")} alt="menu icon" width="42"/>
            <form onSubmit={dispatchUserSearch} className="searchForm">
                <input type="text" placeholder="Search" onChange={handleSearch} value={userSearch}/>
                <button type="submit"><img src={require("../assets/icons/search_white_24dp.png")} alt="search icon" width="42" /></button>
            </form>
            <Link to="/AddItem" id="addBtn">
                <img id="addItem" src={require("../assets/icons/add_white_24dp.png")} alt="add item icon" />
            </Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {state: state}
}

export default connect(mapStateToProps)(SearchBar);