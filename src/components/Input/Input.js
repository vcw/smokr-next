import React from 'react';
import { cn, cns } from '../../utils/bem';
import './Input.css';

function Input({
  className,
  name,
  placeholder,
  type = 'text',
  value,
  onChange
}) {
  const b = cn('input');

  return (
    <input
      className={cns(b(), className)}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input;
