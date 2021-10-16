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
      <div className="Card-Section-Main Card-Section-Main--commitinfo">
        <div className="Card-Section-small Card-Section-small--title">
          <div className="Card-Section-Icon-Index">
            <CardIcon cardStatus={data.cardStatus} className="CardIcon" />
            <span
              className={cn('Card-Index', {
                Card_Index_complete: data.cardStatus === CARD_STATUS.COMPLETE,
                Card_Index_error: data.cardStatus === CARD_STATUS.ERROR,
                Card_Index_pending: data.cardStatus === CARD_STATUS.PENDING,
                Card_Index_pseudo: data.cardStatus === CARD_STATUS.PSEUDO,
              })}
            >
              {data.index}
            </span>
          </div>
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
            className="Card-Author"
            type={PROPERTY_TYPES.AUTHOR}
            primaryText={data.author}
          />
        </div>
      </div>
      <div className="Card-Section-Main Card-Section-Main--datetime">
        <CardPropertyData
          className="Card-Date"
          type={PROPERTY_TYPES.DATETIME}
          primaryText={data.datetime}
        />
        <CardPropertyData
          className="Card-Time"
          type={PROPERTY_TYPES.DURATION}
          primaryText={data.duration}
        />
      </div>
    </div>
  )
}
