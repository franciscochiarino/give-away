
import React from 'react';
import SearchBar from './SearchBar';
import '../style/App.css'
import CategoriesContainer from './CategoriesContainer';
import CardsContainer from './CardsContainer';

function App() {
    return (
        <div className="App">
            <SearchBar />
            <CategoriesContainer />
            <CardsContainer />
        </div>
    );
}


export default App;