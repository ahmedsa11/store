import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReduser from './redusers/rootReduser'
import { composeWithDevTools } from "redux-devtools-extension";
const initialState = {}
const middleware=[thunk]
const store =createStore(rootReduser,initialState,composeWithDevTools(applyMiddleware(...middleware)))
export default store