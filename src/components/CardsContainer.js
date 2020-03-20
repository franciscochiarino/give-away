import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import '../style/CardsContainer.css'
import Card from './Card'

function CardsContainer(props) {

    // Filter cards by search term
    const filterSearchTerm = props.state.items.filter(item => {
        let itemTitle = item.title.toLocaleLowerCase();
        let userSearch = props.state.searchTerm.toLocaleLowerCase();
        return itemTitle.includes(userSearch);
    })

    // Filter cards by category
    const filterCategory = filterSearchTerm.filter(item => {
        return item.category.includes(props.state.searchCategory);
    })

    // Get items from Reducer
    const displayItems = filterCategory.map(item => {
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
