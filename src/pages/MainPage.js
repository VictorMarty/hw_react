import './MainPage.css'
import { Icon } from '../components/Icon/Icon'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
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

export const MainPage = (props) => {
  const history = useHistory()
  function toSetting() {
    history.push('/settings', { from: 'MainPage' })
  }
  const title = 'School CI server'
  let headers_button
  //FIXME: Переделать на фуккцию и переменовать в камелкейс
  if (props.isSettingsStatus) {
    headers_button = (
      <>
        <Button
          size={BUTTON_SIZES.S}
          view={BUTTON_VIEWS.CONTROL}
          pin={BUTTON_PINS.ROUND_ROUND}
          children="Run build"
          className="first-btn"
          iconLeft={Icon({ icon: iconRunBuild })}
          // onClick
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
    headers_button = (
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
      <Card
        key={cardData.index}
        // FIXME: стили для карточки марджины

        className="some ckassName"
        data={cardData}
      />
    )
  })

  return (
    <div className="MainPage">
      <div className="MainPage--header MainPage-container">
        <Header title={title} buttons={headers_button} />
      </div>
      <div className="MainPage--main MainPage-container">
        {!props.isSettingsStatus ? (
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
              size={BUTTON_SIZES.S}
              view={BUTTON_VIEWS.CONTROL}
              pin={BUTTON_PINS.ROUND_ROUND}
              children="Show more"
              // onClick
            />
          </div>
        )}
      </div>
      <div className="MainPage--footer">
        <Footer className="MainPage-container" />
      </div>
    </div>
  )
}
