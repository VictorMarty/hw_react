import './Card.css'
import classNames from 'classnames'

import {
  CardPropertyData,
  TYPES as PROPERTY_TYPES,
} from './CardPropertyData/CardPropertyData'

import { Icon } from '../Icon/Icon'

import completeIcon from './../../assets/icons/complete.svg'
import pendingIcon from './../../assets/icons/pending.svg'
import errorIcon from './../../assets/icons/error.svg'

const cn = classNames

export const CARD_STATUS = {
  COMPLETE: 'complete',
  ERROR: 'error',
  PENDING: 'pending',
  PSEUDO: 'pseudo',
}

const CardIcon = ({ cardStatus, className }) => {
  let icon
  switch (cardStatus) {
    case CARD_STATUS.COMPLETE:
      icon = completeIcon
      break
    case CARD_STATUS.PENDING:
      icon = pendingIcon
      break
    case CARD_STATUS.ERROR:
      icon = errorIcon
      break
    default:
      icon = null
  }
  return <Icon icon={icon} className={className} />
}

// TODO: Как можно предупредить о наличии свойств в ожидаемом объекте?
// data = cardStatus, index, message, branch, commit,author,datetime,duration
export const Card = ({ className, data }) => {
  return (
    <div className={cn('Card', className)}>
      <div className="Card-Section-main">
        <div className="Card-Section-small Card-Section-small--title">
          <CardIcon cardStatus={data.cardStatus} className="CardIcon" />
          <span
            className={cn('Card-Index', {
              Card_Index_complete: data.cardStatus === CARD_STATUS.COMPLETE,
              Card_Index_error: data.cardStatus === CARD_STATUS.ERROR,
              Card_Index_panding: data.cardStatus === CARD_STATUS.PENDING,
              Card_Index_pseudo: data.cardStatus === CARD_STATUS.PSEUDO,
            })}
          >
            {data.index}
          </span>
          <span className="Card-Message">{data.message}</span>
        </div>
        <div className="Card-Section-small">
          <CardPropertyData
            className="Card-Commit"
            type={PROPERTY_TYPES.COMMIT}
            primaryText={data.branch}
            secondaryText={data.commit}
          />
          <CardPropertyData
            type={PROPERTY_TYPES.AUTHOR}
            primaryText={data.author}
          />
        </div>
      </div>
      <div className="Card-Section-Main">
        <CardPropertyData
        className="Card-Date"
          type={PROPERTY_TYPES.DATETIME}
          primaryText={data.datetime}
        />
        <CardPropertyData
          type={PROPERTY_TYPES.DURATION}
          primaryText={data.duration}
        />
      </div>
    </div>
  )
}
