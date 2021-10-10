import './Header.css'
import cn from 'classnames'
export const Header = ({ className, title, buttons }) => {
  return (
    <header className={cn('Header', className)}>
      <h1 className="Header-title">{title}</h1>
      <div className="Header-buttons">{buttons}</div>
    </header>
  )
}
