import React from 'react'
import {connect} from 'react-redux'
import '../style/CardsContainer.css'

function CardsContainer(props) {

    // Get items from Reducer
    const displayItems = props.state.items.map(item => {
        return (
            <div key={item.id} className="card">
                <img className="itemImage" src={item.imgSrc} alt={item.title}/>
                <p className="itemLocation">{item.location}</p>
                <p className="itemTitle">{item.title}</p>
            </div>
        )
    })

    return (
        <div className="cardsContainer">
            {displayItems}
        </div>
    )
}

const mapStateToProps = state => {
    return {state:state}
}

export default connect(mapStateToProps)(CardsContainer);
