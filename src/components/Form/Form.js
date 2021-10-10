import './Form.css'
import cn from 'classnames'
export const Form = (props) => {
  return (
    <form className={cn("Form", props.className)}>
      <div className="FormHeader">
        <span class="FormHeader-title">{props.title}</span>
        <p className="FormHeader-description">{props.description}</p>
      </div>
      <div className="FormInputArea">
        {props.inputs.map((input) => {
          return <div className="FormInputArea-wrapper">{input}</div>
        })}
      </div>
      <div className="FormButtonsArea">{props.buttons}</div>
    </form>
  )
}
