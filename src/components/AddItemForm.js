import React, {useState} from 'react'
import '../style/AddItem.css'

export default function AddItemForm() {

    // Input variables
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
