import React from 'react'
import styles from './Button.module.css'

interface ButtonComProps {
  variant?: 'default' | 'outlined' | 'filled';
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  name?: string;
  style?: React.CSSProperties;
}

const ButtonCom: React.FC<ButtonComProps> = ({
  variant = 'default',
  type = 'button',
  onClick,
  children,
  className = '',
  disabled = false,
  name,
  style,
}) => {
  return (
    <button
      className={[
        styles.button,
        styles[variant],
        className
      ].filter(Boolean).join(' ')}
      type={type}
      onClick={onClick}
      disabled={disabled}
      name={name}
      style={style}
    >
      {children}
    </button>
  )
}

export default ButtonCom 