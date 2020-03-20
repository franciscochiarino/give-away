
import React from 'react';
import SearchBar from './SearchBar';
import '../style/App.css'
import CategoriesContainer from './CategoriesContainer';
import CardsContainer from './CardsContainer';
import {BrowserRouter, Route} from 'react-router-dom';
import AddItem from './AddItem'
import ViewItem from './ViewItem';

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

                <Route path="/ViewItem" exact>
                    <ViewItem />
                </Route>

            </BrowserRouter>
        </div>
    );
}


export default App;