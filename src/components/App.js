
import React from 'react';
import SearchBar from './SearchBar';
import '../style/App.css'
import CategoriesContainer from './CategoriesContainer';

function App() {
    return (
        <div className="App">
            <SearchBar />
            <CategoriesContainer />
        </div>
    );
}


export default App;