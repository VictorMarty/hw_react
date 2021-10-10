import './Popup.css'
import {
  Button,
  SIZES as BUTTON_SIZES,
  VIEWS as BUTTON_VIEWS,
  PINS as BUTTON_PINS,
} from './../Button/Button'

import { Input } from '../Input/Input'
import { Form } from './../Form/Form'
export const PopUp = ({ className, onClose }) => {
  const buttons = [
    <Button
      className="PopUp-RunBuildButton"
      size={BUTTON_SIZES.N}
      view={BUTTON_VIEWS.ACTION}
      pin={BUTTON_PINS.ROUND_ROUND}
      children="Run build"
      onClick={(event) => {
        event.preventDefault()
        alert('Ну допустим сбилдилось')
        onClose()
      }}
    />,
    <Button
      size={BUTTON_SIZES.N}
      view={BUTTON_VIEWS.CONTROL}
      pin={BUTTON_PINS.ROUND_ROUND}
      children="Cancel"
      onClick={onClose}
    />,
  ]
  const input = [<Input placeHolder="Commit Hash" onChange={() => {}} />]
  return (
    <div className="Popup">
      <Form
        className="Popup-Form"
        title="New build"
        description="Enter the commit hash which you want to build."
        inputs={input}
        buttons={buttons}
      />
    </div>
  )
}
