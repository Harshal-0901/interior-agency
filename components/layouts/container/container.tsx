import React from "react";
type ContainerTypes = {
  children: React.ReactNode;
  className?: string;
};
const Container = ({ children, className }: ContainerTypes) => {
  return (
    <div
      data-comp="cointainer"
      className={`sm:mx-auto px-base h-full  ${className} max-w-screen-2xl`}
    >
      {children}
    </div>
  );
};

export default Container;
