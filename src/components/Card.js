import React from 'react'
import {Link, Route, BrowserRouter} from 'react-router-dom'
import ViewItem from './ViewItem'

export default function Card({id, title, location, img, description}) {

    return (
        <div className="card">
            <Link to={`/ViewItem/${id}`} style={{textDecoration: 'none', color: '#000'}}>
                <img className="itemImage" src={img} alt={title}/>
                <p className="itemLocation">{location}</p>
                <p className="itemTitle">{title}</p>
            </Link>

        </div>
        
    )
}
