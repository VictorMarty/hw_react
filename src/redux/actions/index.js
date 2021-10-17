export const SET_SETTINGS = 'SET_SETTINGS'
export const SET_CARDS_DATA = 'SET_CARDS_DATA'
export const setSettings = (settings) => ({
  type: SET_SETTINGS,
  payload: settings,
})

export const setCardsData = (cardsData) => ({
  type: SET_CARDS_DATA,
  payload: cardsData,
})
