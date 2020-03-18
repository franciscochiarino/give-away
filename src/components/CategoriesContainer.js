import React from 'react'
import {connect} from 'react-redux'
import '../style/CategoriesContainer.css'

function CategoriesContainer(props) {

    // Map categories to display them
    const displayCategories = props.state.categories.map((category, i) => {
        return (
            <li key={i} className="category" >
                <button>
                    <img src={require(`../assets/${category.name}.png`)} alt=""/>
                    <p className="categoryName">{category.name}</p>
                </button>
            </li>
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
