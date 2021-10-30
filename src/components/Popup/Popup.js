import './Popup.css'
import {
  Button,
  SIZES as BUTTON_SIZES,
  VIEWS as BUTTON_VIEWS,
  PINS as BUTTON_PINS,
} from './../Button/Button'

import { useState } from 'react'
import { Input } from '../Input/Input'
import { Form } from './../Form/Form'
import { useEffect } from 'react'
export const Popup = ({ className, onClose, addNewCard }) => {
  const [disabled, setDisabled] = useState(false)
  const [commitHash, setCommitHash] = useState('')

  const closeKeyHandler = (event) => {
    if (event.charCode || event.keyCode === 27) {
      setTimeout(onClose)
    }
  }
  useEffect(() => {
    document.body.addEventListener('keydown', closeKeyHandler)
    return function cleanup() {
      document.body.removeEventListener('keydown', closeKeyHandler)
    }
  })

  const runBuild = (event) => {
    setDisabled(true)
    setTimeout(() => {
      let cubic = Math.random()
      event.preventDefault()
      if (cubic <= 0.7) {
        // TODO: Добавить добавление новой карточки по экшену
        // addNewCard(commitHash, 'complete')
        setDisabled(false)
        onClose()
      } else {
        // addNewCard(commitHash, 'error')
        setDisabled(false)
        onClose()
      }
    }, 1000)
  }
  const buttons = [
    <Button
      className="PopUp-RunBuildButton"
      size={BUTTON_SIZES.N}
      view={BUTTON_VIEWS.ACTION}
      pin={BUTTON_PINS.ROUND_ROUND}
      disabled={disabled}
      children="Run build"
      onClick={runBuild}
    />,
    <Button
      size={BUTTON_SIZES.N}
      view={BUTTON_VIEWS.CONTROL}
      pin={BUTTON_PINS.ROUND_ROUND}
      children="Cancel"
      onClick={onClose}
      disabled={disabled}
    />,
  ]
  const input = [
    <Input
      placeHolder="Commit Hash"
      onChange={setCommitHash}
      value={commitHash}
    />,
  ]
  return (
    <div className="Popup">
      <Form
        className="Popup-Form"
        title="New build"
        description="Enter the commit hash which you want to build."
        inputs={input}
        buttons={buttons}
        disabled={disabled}
      />
    </div>
  )
}