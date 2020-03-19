import React from 'react'
import {Link} from 'react-router-dom';
import AddItem from './AddItem';
import '../style/SearchBar.css';

export default function SearchBar() {
    return (
        <div className="searchBar">
            <form>
                <input type="text" placeholder="Search"/>
            </form>
                <Link to="/AddItem">
                    <img id="addItem" src={require("../assets/add-item.png")} alt="" width="32" height="32"/>
                </Link>
        </div>
    )
}
