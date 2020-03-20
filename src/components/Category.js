import React from 'react'
import { connect } from 'react-redux'

function Category(props) {

    const dispatchCategory = () => {
        props.dispatch({
            type: 'SEARCH_CATEGORY',
            payload: props.name
        })
    }
    
    return (
        <li className="category" >
            <button className="categoryBtn" onClick={dispatchCategory}>
                <img src={require(`../assets/${props.name}.png`)} alt={`${props.name} category icon`} />
                <p className="categoryName">{props.name}</p>
            </button>
        </li>
    )
}

const mapStateToProps = state => {
    return {state: state}
}

export default connect(mapStateToProps)(Category);