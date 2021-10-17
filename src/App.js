import { MainPage } from './pages/MainPage'
import { SettingsPage } from './pages/SettingsPage'
import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Popup } from './components/PopUp/Popup'

import { cardsData as TestingCardsData } from './assets/cardsData'

function App() {
  const [isSettingsStatus, setSettingsStatus] = useState(false)
  const [cardsData, setCardsData] = useState([])
  const [popUpVisible, setPopUpVisible] = useState(false)
  function getCardsData() {
    setCardsData(TestingCardsData)
  }
  // FIXME: Ошибка, не пожет сделать map по новым данным
  function addNewCard(commitHash, status) {
    const newCardData = {
      index: '#1368',
      message: 'add documentation for postgres scaler',
      branch: 'master',
      commit: commitHash,
      author: 'Philip Kirkorov',
      datetime: '21 янв, 03:06',
      duration: '1 ч 20 мин',
      cardStatus: status,
    }
    setCardsData(cardsData.unshift(newCardData))
  }

  function closePopUp(event) {
    if (event) {
      event.preventDefault()
    }

    setPopUpVisible(false)
  }
  function openPopup() {
    setPopUpVisible(true)
  }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/settings">
            <SettingsPage
              setSettingsStatus={setSettingsStatus}
              getCardsData={getCardsData}
            />
          </Route>
          <Route path="/">
            <MainPage
              isSettingsStatus={isSettingsStatus}
              cardsData={cardsData}
              openPopup={openPopup}
              setCardsData={setCardsData}
            />
          </Route>
        </Switch>
      </Router>
      {!!popUpVisible && (
        <div className="AppPopUp-background">
          <Popup
            className="AppPopUp"
            onClose={closePopUp}
            addNewCard={addNewCard}
          ></Popup>
        </div>
      )}
    </div>
  )
}

export default App
