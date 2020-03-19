import React, {useState} from 'react'
import AddItemTopBar from './AddItemTopBar'
import AddItemForm from './AddItemForm'
import AddItemPostedMessage from './AddItemPostedMessage'

function AddItem() {

    const [postState, setPostState] = useState(false);

    const changeState = () => {
        return setPostState(!postState)
    }
    
    return (
        <div>
            <AddItemTopBar />
            {posted ? <AddItemPostedMessage /> : <AddItemForm changeState={changeState} /> }
        </div>
    )
}
