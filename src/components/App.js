
import React from 'react';
import SearchBar from './SearchBar';
import '../style/App.css'
import CategoriesContainer from './CategoriesContainer';
import CardsContainer from './CardsContainer';
import {BrowserRouter, Route} from 'react-router-dom';
import AddItem from './AddItem'

function App() {
    return (
        <div className="App">
            <BrowserRouter>

                <Route path="/" exact>
                    <SearchBar />
                    <CategoriesContainer />
                    <CardsContainer />
                </Route>

                <Route path="/AddItem" exact>
                    <AddItem />
                </Route>

            </BrowserRouter>
        </div>
    );
}


export default App;