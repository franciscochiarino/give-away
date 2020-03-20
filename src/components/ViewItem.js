import React from 'react'
import ViewItemTopBar from './ViewItemTopBar'
import { connect } from 'react-redux';

function ViewItem(props) {

    const itemId = window.location.href[window.location.href.length - 1];
    const [selectedItem] = props.state.items.filter(item => item.id === parseInt(itemId, 10));
    console.log(selectedItem)

    return (
        <div>
            <ViewItemTopBar itemName={selectedItem.title} />
            <img src={selectedItem.imgSrc} alt={selectedItem.title}/>
            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.location}</p>
            <p>{selectedItem.description}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {state: state}
}

export default connect(mapStateToProps)(ViewItem);