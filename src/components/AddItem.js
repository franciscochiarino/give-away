import React, { useEffect } from 'react'
import AddItemTopBar from './AddItemTopBar'
import AddItemForm from './AddItemForm'
import AddItemPostedMessage from './AddItemPostedMessage'
import { connect } from 'react-redux'

function AddItem(props) {

    // Set itemIsPosted to false when component mounts
    useEffect(() => {
        props.dispatch({
            type: 'MAKE_POSTED_FALSE'
        })
    })

    return (
        <div>
            <AddItemTopBar />
            {props.state.posted ? <AddItemPostedMessage /> : <AddItemForm /> }
        </div>
    )
}

const mapStateToProps = state => {
    return {state: state}
}

export default connect(mapStateToProps)(AddItem);
