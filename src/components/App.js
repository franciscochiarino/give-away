
import React from 'react';
import SearchBar from './SearchBar';
import '../style/App.css'
import CategoriesContainer from './CategoriesContainer';
import CardsContainer from './CardsContainer';
import {BrowserRouter, Route, Link} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <SearchBar />
                <CategoriesContainer />
                <CardsContainer />
            </BrowserRouter>
        </div>
    );
}


export default App;