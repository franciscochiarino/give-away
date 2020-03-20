import React from 'react'
import {connect} from 'react-redux'
import '../style/CardsContainer.css'
import Card from './Card'

function CardsContainer(props) {

    // Filter searched category 
    let filteredItems = [...props.state.items];

    if (props.state.searchCategory) {
        filteredItems.filter(item => item.category === props.state.searchCategory);
    } 

    // Get items from Reducer
    const displayItems = filteredItems.map(item => {
        return (
            <Card key={item.id} id={item.id} title={item.title} location={item.location} img={item.imgSrc} description={item.description}/> 
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
