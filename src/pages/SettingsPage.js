import './SettingsPage.css'
import { useState } from 'react'
import { Header } from '../components/Header/Header'
import { Form } from '../components/Form/Form'
import {
  Input,
  TYPES as INPUT_TYPES,
  MASKS as INPUT_MASKS,
} from '../components/Input/Input'
import { Footer } from '../components/Footer/Footer'
import {
  Button,
  SIZES as BUTTON_SIZES,
  VIEWS as BUTTON_VIEWS,
  PINS as BUTTON_PINS,
} from '../components/Button/Button'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'
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
      <Helmet>
        <title>Settings Page</title>
        <meta name="description" content="Settings Page" />
      </Helmet>
      <div className="SettingsPage--header SettingsPage-container">
        <Header title="School CI server" />
      </div>
      <div className="SettingsPage--main SettingsPage-container ">
        <Form className="SettingsPage-container--small" {...settingsFormData} />
      </div>
      <div className=" SettingsPage--footer">
        <Footer className="SettingsPage-container" author="Victor Martynov" />
      </div>
    </div>
  )
}
