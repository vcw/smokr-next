import React from 'react';
import { cn, cns } from '../../utils/bem'
import './Button.css';

function Button({ className, text, onClick, type='button' }) {
  const b = cn('button');

  return (
    <button
      className={cns(b(), className)}
      onClick={onClick}
      type={type}
    >
      {text && 
        <span className={b('text')}>
          {text}
        </span>
      }
    </button>
  );
}

export default Button;