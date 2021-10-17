import { SET_SETTINGS } from './../actions'

const defaultState = {
  gitHubRepository: null,
  buildCommand: null,
  mainBranch: null,
  period: null,
}

export default function settingsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_SETTINGS:
      return action.payload
    default:
      return state
  }
}

export const setSettings = (settings) => ({
  type: SET_SETTINGS,
  payload: settings,
})
