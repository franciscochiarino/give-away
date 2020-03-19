import React from 'react'
import {connect} from 'react-redux'
import '../style/CategoriesContainer.css'
import Category from './Category'

function CategoriesContainer(props) {

    // Map categories to display them
    const displayCategories = props.state.categories.map((category, i) => {
        return (
            <Category key={i} name={category.name} />
        )
    })

    return (
        <div>
            <ul className="categoriesContainer">
                {displayCategories}
            </ul>
        </div>
    )
}

// Bring state to props
const mapStateToProps = (state) => {
    return {state: state}
}

// Connect to Reducer
export default connect(mapStateToProps)(CategoriesContainer);
