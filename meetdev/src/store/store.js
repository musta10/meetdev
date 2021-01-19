import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const middeware = [thunk]

const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(...middeware)
))

export default store;