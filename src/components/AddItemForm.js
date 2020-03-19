import React from 'react'
import '../style/AddItem.css'

export default function AddItemForm() {
    return (
        <div>
            <form className="addItemForm">
                <input type="file" required/>
                <input type="text" placeholder="Title" required/>
                <select name="categories" required>
                    <option value="" selected disabled>Select a Category &#187;</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Food">Food</option>
                    <option value="Books">Books</option>
                </select>
                <input type="text" placeholder="Description" required/>
                <input type="text" placeholder="Location" required/>
                <div className="formBtn">
                    <button className="cancelBtn">Cancel</button>
                    <button className="postBtn" type="submit">Post</button>
                </div>
            </form>
        </div>
    )
}
