import React from 'react'
import ViewItemTopBar from './ViewItemTopBar'
import { connect } from 'react-redux'

function ViewItem(props) {
    
    const [currentItem] = props.state.items.filter(item => item.id === parseInt(props.match.params.id, 10));

    return (
        <div>
            <ViewItemTopBar itemName={currentItem.title} />
            <img src={currentItem.imgSrc} alt={currentItem.title}/>
            <h3>{currentItem.title}</h3>
            <p>{currentItem.location}</p>
            <p>{currentItem.description}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {state: state}
}

export default connect(mapStateToProps)(ViewItem);