import './Button.css'
import classNames from 'classnames'

const cn = classNames

export const SIZES = {
  S: 's',
  N: 'n',
}

export const VIEWS = {
  ACTION: 'action',
  CONTROL: 'control',
  DEFAULT: 'default',
  PSEUDO: 'pseudo',
}

export const PINS = {
  CIRCLE_CIRCLE: 'circle-circle',
  ROUND_ROUND: 'round-round',
}

export const Button = ({
  children,
  onClick,
  iconLeft,
  iconRight,
  iconOnly,
  pin = PINS.ROUND_ROUND, // circle-circle, round-round
  view = VIEWS.DEFAULT, // action, control, default, pseudo
  size = SIZES.N, // s, n
  className,
  disabled = false, // true, false
}) => {
  return (
    <button
      className={cn(className, 'Button', {
        'Button_pin_circle-circle': pin === PINS.CIRCLE_CIRCLE,
        'Button_pin_round-round': pin === PINS.ROUND_ROUND,
        Button_size_s: size === SIZES.S,
        Button_size_n: size === SIZES.N,
        Button_view_action: view === VIEWS.ACTION,
        Button_view_control: view === VIEWS.CONTROL,
        Button_view_default: view === VIEWS.DEFAULT,
        Button_view_pseudo: view === VIEWS.PSEUDO,
      })}
      onClick={
        onClick
          ? onClick
          : (event) => {
              event.preventDefault()
            }
      }
      disabled={disabled}
    >
      {!iconOnly && iconLeft && (
        <span className="Button-Icon Button-Icon_side_left">{iconLeft}</span>
      )}
      {!iconOnly && iconRight && (
        <span className="Button-Icon Button-Icon_side_right">{iconRight}</span>
      )}
      {iconOnly ? (
        <span className="Button-Icon ">{iconOnly}</span>
      ) : (
        <span className="Button-Text">{children}</span>
      )}
    </button>
  )
}
