import React, {useState} from 'react'
import '../style/AddItem.css'
import {connect} from 'react-redux';

function AddItemForm(props) {

    // Input variables
    const [imgSrc] = useState('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frender.fineartamerica.com%2Fimages%2Frendered%2Fsmall%2Fposter%2Fimages-square-real-5%2Fpantone-186-fire-engine-red-color-on-worn-canvas-design-turnpike.jpg&f=1&nofb=1')
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');

    // Handle user inputs
    const handleTitle = e => setTitle(e.target.value);
    const handleCategory = e => setCategory(e.target.value);
    const handleDescription = e => setDescription(e.target.value);
    const handleLocation = e => setLocation(e.target.value);

    // Dispatch
    const dispatchItem = e => {
        e.preventDefault();

        props.dispatch({
            type: 'ADD_ITEM',
            payload: {
                id: props.state.items.length,
                imgSrc,
                title,
                category,
                description,
                location
            }
        })
    }

    return (
        <div>
            <form className="addItemForm" onSubmit={dispatchItem}>

                {/* File */}
                <input type="file" />

                {/* Title */}
                <input type="text" placeholder="Title" required onChange={handleTitle}/>

                {/* Category */}
                <select name="categories" required onChange={handleCategory}>
                    <option selected disabled>Select a Category &#187;</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Food">Food</option>
                    <option value="Books">Books</option>
                </select>

                {/* Description */}
                <input type="text" placeholder="Description" required onChange={handleDescription}/>

                {/* Location */}
                <input type="text" placeholder="Location" required onChange={handleLocation}/>
                
                {/* Buttons */}
                <div className="formBtn">
                    <button className="cancelBtn">Cancel</button>
                    <button className="postBtn" type="submit">Post</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {state: state}
}

export default connect(mapStateToProps)(AddItemForm);
