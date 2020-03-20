
import React from 'react';
import SearchBar from './SearchBar';
import '../style/App.css'
import CategoriesContainer from './CategoriesContainer';
import CardsContainer from './CardsContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddItem from './AddItem'
import ViewItem from './ViewItem';

function App() {
    return (
        <div className="App">
            <BrowserRouter>

                <Switch>
                    <Route path="/" exact>
                        <SearchBar />
                        <CategoriesContainer />
                        <CardsContainer />
                    </Route>

                    <Route path="/AddItem" exact component={AddItem} />
                    <Route path="/ViewItem/:id" component={ViewItem} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}


export default App;