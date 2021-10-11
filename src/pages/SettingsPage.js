import './SettingsPage.css'
import { useState } from 'react'
import { Header } from '../components/Header/Header'
import { Form } from '../components/Form/Form'
import { Input, TYPES as INPUT_TYPES } from '../components/Input/Input'
import { Footer } from '../components/Footer/Footer'
import {
  Button,
  SIZES as BUTTON_SIZES,
  VIEWS as BUTTON_VIEWS,
  PINS as BUTTON_PINS,
} from '../components/Button/Button'

import { useHistory } from 'react-router-dom'

export const SettingsPage = (props) => {
  const [gitHubRepositoryLocal, setGitHubRepositoryLocal] = useState('')
  const [buildCommandLocal, setbuildCommandLocal] = useState('')
  const [mainBranchLocal, setmainBranchLocal] = useState('')
  const [peiodLocal, setPeiodLocal] = useState('')

  const history = useHistory()
  const routeChange = (history) => (path) => () => {
    history.push(path)
  }

  const saveSettings = (event) => {
    if (gitHubRepositoryLocal === '' || buildCommandLocal === '') {
      return
    }
    if (gitHubRepositoryLocal !== 'philip1967/my-awesome-repo') {
      alert('Ошибка, попробуйте название : philip1967/my-awesome-repo')
      event.preventDefault()
      return
    } else {
      props.setSettings({
        gitHubRepository: gitHubRepositoryLocal,
        buildCommand: buildCommandLocal,
        mainBranch: mainBranchLocal,
        period: peiodLocal,
      })
      props.setSettingsStatus(true)
      props.getCardsData()
      routeChange(history)('/')()
    }
  }

  const inputsData = [
    {
      value: gitHubRepositoryLocal,
      onChange: setGitHubRepositoryLocal,
      labelText: 'GitHub repository',
      placeholder: 'user-name/repo-name',
      required: true,
      className: 'SettingsPage-Input',
    },
    {
      value: buildCommandLocal,
      onChange: setbuildCommandLocal,
      labelText: 'Build command',
      placeholder: 'npm ci && npm run build',
      required: true,
      className: 'SettingsPage-Input',
    },
    {
      value: mainBranchLocal,
      onChange: setmainBranchLocal,
      labelText: 'Main branch',
      placeholder: 'master',
      required: false,
      className: 'SettingsPage-Input',
    },
    {
      value: peiodLocal,
      onChange: setPeiodLocal,
      labelText: 'Synchronize every',
      placeholder: '',
      required: false,
      className: 'SettingsPage-Input SettingsPage-Input--inline',
      type: INPUT_TYPES.INLINE,
      secondaryText: 'minutes',
    },
  ]

  const buttons = [
    <Button
      children="Save"
      onClick={saveSettings}
      pin={BUTTON_PINS.ROUND_ROUND}
      view={BUTTON_VIEWS.ACTION}
      size={BUTTON_SIZES.N}
      className="SettingsPage-Button"
      disabled={false}
      // TODO: Добавить проверку на ошибку, сохранение настроек, добавление карточек
    />,
    <Button
      children="Cancel"
      // onClick

      pin={BUTTON_PINS.ROUND_ROUND}
      view={BUTTON_VIEWS.CONTROL}
      size={BUTTON_SIZES.N}
      className="SettingsPage-Button"
      disabled={false}
      onClick={routeChange(history)('/')}
    />,
  ]

  // FIXME: Передавать параметры деструктуризацией
  const inputs = inputsData.map((data, index) => {
    return (
      <Input
        key={index}
        value={data.value}
        onChange={data.onChange}
        labelText={data.labelText}
        placeholder={data.placeholder}
        required={data.required}
        className={data.required}
        secondaryText={data.secondaryText}
        type={data.type}
      />
    )
  })

  const settingsFormData = {
    header: {
      title: 'Settings',
      description:
        'Configure repository connection and synchronization settings.',
    },
    inputs: inputs,
    buttons: buttons,
  }

  return (
    <div className="SettingsPage">
      <div className="SettingsPage--header SettingsPage-container">
        <Header title="School CI server" />
      </div>
      <div className="SettingsPage--main SettingsPage-container ">
        <Form
          className="SettingsPage-container--small"
          title={settingsFormData.header.title}
          description={settingsFormData.header.description}
          inputs={settingsFormData.inputs}
          buttons={settingsFormData.buttons}
        />
      </div>

      <div className=" SettingsPage--footer">
        <Footer className="SettingsPage-container" />
      </div>
    </div>
  )
}
