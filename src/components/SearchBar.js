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
            <form onSubmit={dispatchUserSearch}>
                <input type="text" placeholder="Search" onChange={handleSearch} value={userSearch}/>
            </form>
                <Link to="/AddItem">
                    <img id="addItem" src={require("../assets/add-item.png")} alt="" width="24" height="24" style={{marginTop: '0.2rem'}}/>
                </Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {state: state}
}

export default connect(mapStateToProps)(SearchBar);