import React, { useEffect } from 'react'
import AddItemTopBar from './AddItemTopBar'
import AddItemForm from './AddItemForm'

export default function AddItem() {

    useEffect(() => {
        console.log('componentDidMount')
    },[])
    
    return (
        <div>
            <AddItemTopBar />
            <AddItemForm />
        </div>
    )
}
