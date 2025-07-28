import React from 'react'
import styles from './Input.module.css'

interface InputComProps {
  variant?: 'default' | 'outlined' | 'filled';
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  name?: string;
}

const InputCom: React.FC<InputComProps> = ({
  variant = 'default',
  type = 'text',
  value,
  onChange,
  placeholder = '',
  className = '',
  disabled = false,
  name,
}) => {
  return (
    <input
      className={[
        styles.input,
        styles[variant],
        className
      ].filter(Boolean).join(' ')}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      name={name}
    />
  )
}

export default InputCom 