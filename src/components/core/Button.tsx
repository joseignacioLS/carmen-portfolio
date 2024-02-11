import React, { ReactNode } from "react";

import styles from "./Button.module.scss";

type TProps = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
};

const Button = ({ children, onClick, className }: TProps) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onClick();
  };
  return (
    <button className={`${className} ${styles.button}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
