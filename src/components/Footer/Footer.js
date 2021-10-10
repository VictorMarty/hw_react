import { Link } from './../Link/Link'
import './Footer.css'
import cn from 'classnames'

export const Footer = (props) => {
  return (
    <footer className={cn('Footer', props.className)}>
      <div className="Footer-container">
        <div className="Footer-menu">
          <Link text="Support" />
          <Link text="Learning" />
          <Link text="Русская версия" />
        </div>
      </div>
      <div className="Footer-container">
        <span className="Footer-yourname">© 2021 Victor Martynov</span>
      </div>
    </footer>
  )
}
