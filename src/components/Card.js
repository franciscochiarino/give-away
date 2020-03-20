import React from 'react'
import {Link, Route, BrowserRouter} from 'react-router-dom'
import ViewItem from './ViewItem'

export default function Card({id, title, location, img, description}) {

    return (
        <div className="card">
            <Link to={`/ViewItem/${id}`}>
                <img className="itemImage" src={img} alt={title}/>
            </Link>
            <p className="itemLocation">{location}</p>
            <p className="itemTitle">{title}</p>

        </div>
        
    )
}
