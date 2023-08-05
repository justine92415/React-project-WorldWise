import { MouseEventHandler } from 'react';
import { Type } from '../type/Button';
import styles from './Button.module.css';


function Button({
  children,
  onClick,
  type,
}: {
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type: Type;
}) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
