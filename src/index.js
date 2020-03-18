
import React from "react"
import App from "./components/App.js"
import reactDOM from "react-dom"
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Reducer} from './reducer/Reducer'

const store = createStore(Reducer)

reactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById("root"))