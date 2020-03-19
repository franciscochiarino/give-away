import React from 'react'

export default function Category({name}) {
    return (
        <li className="category" >
            <button className="categoryBtn">
                <img src={require(`../assets/${name}.png`)} alt={`${name} category icon`}/>
                <p className="categoryName">{name}</p>
            </button>
        </li>
    )
}
