import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import settingsReducer from './settingsReducer'
import buildReducer from "./buildReducer"

export const rootReducer = combineReducers({
  repos: settingsReducer,
  cards: buildReducer
})



export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
