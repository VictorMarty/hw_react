import './CardPropertyData.css'

import { Icon } from './../../Icon/Icon'

import commit from './../../../assets/icons/author.svg'
import author from './../../../assets/icons/author.svg'
import datetime from './../../../assets/icons/calendar.svg'
import duration from './../../../assets/icons/timer.svg'

export const TYPES = {
  COMMIT: commit,
  AUTHOR: author,
  DATETIME: datetime,
  DURATION: duration,
}

export const CardPropertyData = ({
  type = TYPES.COMMIT,
  primaryText,
  secondaryText,
}) => {
  return (
    <div className="CardPropertyData">
      <span className="CardPropertyData-Icon ">
        <Icon icon={type} />
      </span>
      <span className="CardPropertyData-PrimaryText">{primaryText}</span>
      <span className="CardPropertyData-SecondaryText">{secondaryText}</span>
    </div>
  )
}
