import React, {useState} from 'react'
import AddItemTopBar from './AddItemTopBar'
import AddItemForm from './AddItemForm'
import AddItemPostedMessage from './AddItemPostedMessage'

export default function AddItem() {

    const [postState, setPostState] = useState(false);

    const changeState = () => {
        return setPostState(!postState)
    }
    
    return (
        <div>
            <AddItemTopBar />
            {postState ? <AddItemPostedMessage /> : <AddItemForm changeState={changeState} /> }
        </div>
    )
}
