import React from 'react'
import {Link} from 'react-router-dom'

export default function ViewItemTopBar({itemName}) {
    return (
        <div className="topBar">
            <h2>{itemName}</h2>
            <Link to="/" >
                <img src={require("../assets/back.png")} alt="go back" width="24" height="24"/>
            </Link>
        </div>
    )
}
