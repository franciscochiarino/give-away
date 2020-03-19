import React from 'react'
import '../style/AddItem.css'
import {Link} from 'react-router-dom'

export default function AddItemTopBar() {
    return (
        <div className="topBar">
            <h2>Add Item</h2>
            <Link to="/" >
                <img src={require("../assets/back.png")} alt="go back" width="24" height="24"/>
            </Link>
        </div>
    )
}
