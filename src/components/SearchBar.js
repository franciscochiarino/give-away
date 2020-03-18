import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import AddItem from './AddItem';
import '../style/SearchBar.css';

export default function SearchBar() {
    return (
        <div className="searchBar">
            <form>
                <input type="text" placeholder="Search"/>
            </form>
            <BrowserRouter>
                <Link to="/AddItem"><img src="../assets/add-item.png" alt=""/></Link>
                <Route path="/AddItem" exact render={AddItem} /> 
            </BrowserRouter>
        </div>
    )
}
