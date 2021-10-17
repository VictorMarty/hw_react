import './Link.css'

import classnames from 'classnames'
const cn = classnames
export const Link = ({ content, href = '', className }) => {
  return (
    <a href={href} className={cn('Link', className)}>
      {content}
    </a>
  )
}
