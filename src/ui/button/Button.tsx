import React, { FC } from 'react';
import classes from './Button.module.scss'


export enum ButtonVariant {
  default = 'default',
  emerald = 'emerald',
  amaranth = 'amaranth'  
}

interface ButtonProps {
  children: React.ReactNode | React.ReactChild,
  onClick: () => void,
  variant?: ButtonVariant
}

const Button:FC<ButtonProps> = ({children, onClick, variant}) => {
  const defineVariant = (variant: ButtonVariant | undefined): string => {
    if(variant === ButtonVariant.emerald) {
      return classes.emerald
    }
    if(variant === ButtonVariant.amaranth) {
      return classes.amaranth
    }
    if(variant === ButtonVariant.default) {
      return classes.default
    }
    else {
      return classes.default
    }
  }


  return <button 
    type="button" 
    onClick={onClick} 
    className={defineVariant(variant)}
  >
    {children}
  </button>;
};

export default Button;
