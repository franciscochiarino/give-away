import React from 'react'
import {connect} from 'react-redux'
import '../style/CardsContainer.css'
import Card from './Card'

function CardsContainer(props) {

    // Get items from Reducer
    const displayItems = props.state.items.map(item => {
        return (
            <Card key={item.id} title={item.title} location={item.location} img={item.imgSrc} /> 
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
