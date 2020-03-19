import React from 'react'

export default function AddItemPostedMessage() {
    return (
        <div className="addItemPostedMessage">
            <h2>Thank you!</h2>
            <img src={require("../assets/enjoy.png")} alt="an adult and a child with their hands up" width="80" />
            <h2>Your item has been successfully posted.</h2>
        </div>
    )
}
