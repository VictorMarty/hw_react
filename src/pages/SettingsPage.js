import './SettingsPage.css'
import { Page } from './../components/Page/Page'
import { Form } from '../components/Form/Form'
import {
  Input,
  TYPES as INPUT_TYPES,
  MASKS as INPUT_MASKS,
} from '../components/Input/Input'
import {
  Button,
  SIZES as BUTTON_SIZES,
  VIEWS as BUTTON_VIEWS,
  PINS as BUTTON_PINS,
} from '../components/Button/Button'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSettings } from '../reducers/settingsReducer'

export const SettingsPage = (props) => {
  // TODO: Прокидывать изначальное состояние стора
  const [gitHubRepositoryLocal, setGitHubRepositoryLocal] = useState('')
  const [buildCommandLocal, setbuildCommandLocal] = useState('')
  const [mainBranchLocal, setmainBranchLocal] = useState('')
  const [peiodLocal, setPeiodLocal] = useState('')
  const [disabled, setDisabled] = useState(false)
  const history = useHistory()
  const routeChange = (history) => (path) => () => {
    history.push(path)
  }
  const dispatch = useDispatch()
  const saveSettings = (event) => {
    if (gitHubRepositoryLocal === '' || buildCommandLocal === '') {
      return
    }
    setDisabled(true)
    setTimeout(() => {
      setDisabled(false)
      if (gitHubRepositoryLocal !== 'philip1967/my-awesome-repo') {
        alert('Ошибка, попробуйте название : philip1967/my-awesome-repo')
        event.preventDefault()
        return
      } else {
        dispatch(
          setSettings({
            gitHubRepository: gitHubRepositoryLocal,
            buildCommand: buildCommandLocal,
            mainBranch: mainBranchLocal,
            period: peiodLocal,
          })
        )
        props.setSettingsStatus(true)
        props.getCardsData()
        routeChange(history)('/')()
      }
    }, 1000)
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
      mask: INPUT_MASKS.NUMBER,
    },
  ]

  const buttonsData = [
    {
      children: 'Save',
      onClick: saveSettings,
      pin: BUTTON_PINS.ROUND_ROUND,
      view: BUTTON_VIEWS.ACTION,
      size: BUTTON_SIZES.N,
      className: 'SettingsPage-Button',
      disabled: disabled,
    },
    {
      children: 'Cancel',
      onClick: routeChange(history)('/'),
      pin: BUTTON_PINS.ROUND_ROUND,
      view: BUTTON_VIEWS.CONTROL,
      size: BUTTON_SIZES.N,
      className: 'SettingsPage-Button',
      disabled: disabled,
    },
  ]

  const inputs = inputsData.map((data, index) => {
    return <Input {...data} key={index} />
  })

  const buttons = buttonsData.map((data, index) => {
    return <Button {...data} key={index} />
  })

  const settingsFormData = {
    title: 'Settings',
    description:
      'Configure repository connection and synchronization settings.',
    inputs: inputs,
    buttons: buttons,
  }

  const metatags = {
    title: 'Settings Page',
    description: 'description Setting Page',
  }

  const headerProps = {
    title: 'School CI server',
  }

  const linksData = [
    { content: 'Support' },
    { content: 'Learning' },
    { content: 'Русская версия' },
  ]

  return (
    <Page
      className="SettingPage-content"
      metatags={metatags}
      headerProps={headerProps}
      footerLinksData={linksData}
      footerAuthor="Victor Martynov"
      content={
        <Form
          className="SettingsPage-content-container"
          {...settingsFormData}
        />
      }
    />
  )
}
