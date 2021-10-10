// TODO: Сделать отдельный компонент "страница"
import { MainPage } from './pages/MainPage'
import { SettingsPage } from './pages/SettingsPage'
import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { cardsData as TestingCardsData } from './assets/cardsData'

function App() {
  const [isSettingsStatus, setSettingsStatus] = useState(true)
  const [settings, setSettings] = useState({
    gitHubRepository: null,
    buildCommand: null,
    mainBranch: null,
    period: null,
  })
  const [cardsData, setCardsData] = useState(TestingCardsData)

  function getCardsData() {
    setCardsData(TestingCardsData)
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
            />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
