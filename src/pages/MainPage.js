import cn from 'classnames'
import './MainPage.css'
import { Page } from './../components/Page/Page'
import { Icon } from '../components/Icon/Icon'
import { Card, CARD_STATUS } from './../components/Card/Card'
import {
  Button,
  SIZES as BUTTON_SIZES,
  VIEWS as BUTTON_VIEWS,
  PINS as BUTTON_PINS,
} from '../components/Button/Button'
import mainIcon from './../assets/icons/tools.svg'
import iconRunBuild from './../assets/icons/play.svg'
import iconSettings from './../assets/icons/settings.svg'
import { useHistory } from 'react-router-dom'
import { moreData } from './../assets/cardsData'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export const MainPage = (props) => {
  const [inProgress, setProgress] = useState(false)
  const history = useHistory()
  function toSetting() {
    history.push('/settings', { from: 'MainPage' })
  }

  let title = useSelector((state) => state.repos.gitHubRepository)
  if (!props.isSettingsStatus) {
    title = 'School CI server'
  }
  const isSettingsStatus = props.isSettingsStatus
  let headerButtons = () => {
    if (props.isSettingsStatus) {
      return (
        <>
          <Button
            size={BUTTON_SIZES.S}
            view={BUTTON_VIEWS.CONTROL}
            pin={BUTTON_PINS.ROUND_ROUND}
            children="Run build"
            className="first-btn"
            iconLeft={Icon({ icon: iconRunBuild })}
            onClick={props.openPopup}
          />
          <Button
            size={BUTTON_SIZES.S}
            view={BUTTON_VIEWS.CONTROL}
            pin={BUTTON_PINS.ROUND_ROUND}
            iconOnly={Icon({ icon: iconSettings })}
            onClick={toSetting}
          />
        </>
      )
    } else {
      return (
        <Button
          size={BUTTON_SIZES.S}
          view={BUTTON_VIEWS.CONTROL}
          pin={BUTTON_PINS.ROUND_ROUND}
          children="Settings"
          iconLeft={Icon({ icon: iconSettings })}
          onClick={toSetting}
        />
      )
    }
  }

  const getMoreCard = () => {
    setProgress(true)
    setTimeout(() => {
      props.setCardsData(props.cardsData.concat(moreData))
      setProgress(false)
    }, 500)
  }

  const cards = props.cardsData.map((cardData) => {
    switch (cardData.status) {
      case 'pending':
        cardData.status = CARD_STATUS.PENDING
        break
      case 'error':
        cardData.status = CARD_STATUS.ERROR
        break
      case 'complete':
        cardData.status = CARD_STATUS.COMPLETE
        break
      default:
        cardData.status = CARD_STATUS.ERROR
    }
    return (
      <Card key={cardData.index} className="MainPageCard" data={cardData} />
    )
  })

  const metatags = { title: 'main Pade', description: 'Main Page' }

  const headerProps = {
    title: title,
    buttons: headerButtons(),
    className: cn({ isSettings: isSettingsStatus === true }),
  }

  const linksData = [
    { content: 'Support' },
    { content: 'Learning' },
    { content: 'Русская версия' },
  ]

  return (
    <Page
      metatags={metatags}
      headerProps={headerProps}
      footerLinksData={linksData}
      footerAuthor="Victor Martynov"
      classNameContent="MainPage-content"
      content={
        !props.isSettingsStatus ? (
          <div className="MainPage--nosettings">
            <Icon icon={mainIcon} className="MainIcon" alt="" />
            <p className="mainDescription">
              Configure repository connection and synchronization settings
            </p>
            <Button
              sizes={BUTTON_SIZES.N}
              view={BUTTON_VIEWS.ACTION}
              children="Open settings"
              onClick={toSetting}
            />
          </div>
        ) : (
          <div className="MainPage--history">
            {cards}
            <Button
              className="MainPage-ShowMoreButton"
              size={BUTTON_SIZES.S}
              view={BUTTON_VIEWS.CONTROL}
              pin={BUTTON_PINS.ROUND_ROUND}
              children="Show more"
              disabled={inProgress}
              onClick={getMoreCard}
            />
          </div>
        )
      }
    />
  )
}
