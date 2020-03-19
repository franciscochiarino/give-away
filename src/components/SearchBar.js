import React from 'react'
import {Link} from 'react-router-dom';

export default function SearchBar() {
    return (
        <div className="topBar">
            <form>
                <input type="text" placeholder="Search"/>
            </form>
                <Link to="/AddItem">
                    <img id="addItem" src={require("../assets/add-item.png")} alt="" width="24" height="24" style={{marginTop: '0.2rem'}}/>
                </Link>
        </div>
    )
}
