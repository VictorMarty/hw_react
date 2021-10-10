import './CardPropertyData.css'
import cn from 'classnames'
import { Icon } from './../../Icon/Icon'

import commit from './../../../assets/icons/commit.svg'
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
  className,
}) => {
  return (
    <div className={cn('CardPropertyData', className)}>
      <span className="CardPropertyData-Icon ">
        <Icon icon={type} />
      </span>
      <span className="CardPropertyData-PrimaryText">{primaryText}</span>
      <span className="CardPropertyData-SecondaryText">{secondaryText}</span>
    </div>
  )
}
