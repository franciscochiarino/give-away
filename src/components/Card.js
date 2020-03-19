import React from 'react'

export default function Card({title, location, img}) {
    return (
        <div className="card">
            <img className="itemImage" src={img} alt={title}/>
            <p className="itemLocation">{location}</p>
            <p className="itemTitle">{title}</p>
        </div>
    )
}
