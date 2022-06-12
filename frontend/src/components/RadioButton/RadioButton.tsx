import React, {FC} from 'react';

interface RadioButtonProps extends React.ComponentProps<'input'> {
  labelText?: string
}

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(({
  name,
  value,
  disabled,
  checked,
  labelText,
}, ref) => {
  return (
    <label className="radioButton">
      <input
        className="radioButton__input"
        value={value}
        disabled={disabled}
        name={name}
        defaultChecked={checked}
        type="radio"
        ref={ref}/>
      <div className="radioButton__marker">
      </div>
      {
        labelText ?
        <span className="radioButton__label">{labelText}</span> :
        null
      }
    </label>
  )
})