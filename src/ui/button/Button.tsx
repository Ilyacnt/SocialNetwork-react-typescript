import React, { FC } from 'react';
import classes from './Button.module.scss'

const Button:FC = ({children}) => {
  return <button className={classes.button}>{children}</button>;
};

export default Button;
