import { Link } from './../../Link/Link'
import './Footer.css'
import cn from 'classnames'

export const Footer = ({ className, linksData, author }) => {
  return (
    <footer className={cn('Footer', className)}>
      <div className="Footer-container">
        <div className="Footer-menu">
          {linksData.map((linkData, index) => {
            return <Link {...linkData} key={index} />
          })}
        </div>
      </div>
      <div className="Footer-container">
        <span className="Footer-yourname">© 2021 {author}</span>
      </div>
    </footer>
  )
}
