import React, {useState} from 'react'
import AddItemTopBar from './AddItemTopBar'
import AddItemForm from './AddItemForm'
import AddItemPostedMessage from './AddItemPostedMessage'
import { connect } from 'react-redux'

function AddItem(props) {

    const [postState, setPostState] = useState(false);

    
    return (
        <div>
            <AddItemTopBar />
            {posted ? <AddItemPostedMessage /> : <AddItemForm /> }
        </div>
    )
}

const mapStateToProps = state => {
    return {state: state}
}

export default connect(mapStateToProps)(AddItem);
