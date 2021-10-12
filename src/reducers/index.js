import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import settingsReducer from './settingsReducer'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
  repos: settingsReducer,
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
