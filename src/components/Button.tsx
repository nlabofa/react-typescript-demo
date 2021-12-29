import React from "react";

type ButtonProps = {
  handleClick?: () => void; //handlePress without passing event
  handleClickWithEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = (props: ButtonProps) => {
  return <button onClick={props.handleClickWithEvent}>Click me</button>;
};
