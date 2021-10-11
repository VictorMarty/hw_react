// TODO: Сделать отдельный компонент "страница"
import { MainPage } from './pages/MainPage'
import { SettingsPage } from './pages/SettingsPage'
import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { PopUp } from './components/PopUp/PopUp'

import { cardsData as TestingCardsData } from './assets/cardsData'

function App() {
  const [isSettingsStatus, setSettingsStatus] = useState(false)
  const [settings, setSettings] = useState({
    gitHubRepository: null,
    buildCommand: null,
    mainBranch: null,
    period: null,
  })
  const [cardsData, setCardsData] = useState([])
  const [popUpVisible, setPopUpVisible] = useState(false)
  function getCardsData() {
    setCardsData(TestingCardsData)
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
              setSettings={setSettings}
              setSettingsStatus={setSettingsStatus}
              getCardsData={getCardsData}
            />
          </Route>
          <Route path="/">
            <MainPage
              settings={settings}
              isSettingsStatus={isSettingsStatus}
              cardsData={cardsData}
              openPopup={openPopup}
            />
          </Route>
        </Switch>
      </Router>
      {!!popUpVisible && (
        <div className="AppPopUp-background">
          <PopUp className="AppPopUp" onClose={closePopUp}></PopUp>
        </div>
      )}
    </div>
  )
}

export default App
