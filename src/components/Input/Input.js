import classNames from 'classnames'
import './Input.css'
const cn = classNames

export const SIZES = {
  S: 's',
  N: 'n',
}

export const TYPES = {
  BLOCK: 'block',
  INLINE: 'inline',
}

export const Input = ({
  value,
  onChange,
  labelText,
  required = false, // true, false
  placeholder = '',
  size = SIZES.N,
  type = TYPES.BLOCK,
  className,
  disabled,
  secondaryText = '',
}) => {
  const labelClassName = cn('Input-label', {
    'Input-label_required': required,
  })

  const inputWrapperClassName = cn('Input-textArea', {
    'Input-textArea--inline': type === TYPES.INLINE,
    Input_size_s: type === TYPES.INLINE && size === SIZES.S,
    Input_size_n: type === TYPES.INLINE && size === SIZES.N,
  })

  const inputTextClassName = cn('Input-text', {
    'Input-text--inline': type === TYPES.INLINE,
  })

  const inputClassName = cn(className, 'Input', {
    'Input--inline': type === TYPES.INLINE,
  })

  const renderLabel = () => {
    return labelText && <label className={labelClassName}>{labelText}</label>
  }

  function HandleChange(event) {
    onChange(event.target.value)
  }

  function HandleClearInput() {
    onChange('')
  }
  return (
    <div className={inputClassName}>
      {renderLabel()}
      <div className={inputWrapperClassName}>
        <input
          className={inputTextClassName}
          type="text"
          value={value}
          onChange={HandleChange}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
        />
        {type === TYPES.BLOCK && (
          <span
            className="Input-deleteButton"
            onClick={HandleClearInput}
          ></span>
        )}
      </div>
      <span className="Input-secondaryText">{secondaryText}</span>
    </div>
  )
}
