import React from "react";

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  textColor?: string;
  bgColor?: string;
  type?: "button" | "submit" | "reset";
  form?: string; // allows linking to a <form id="...">
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  onClick,
  className = "",
  textColor = "text-brand-secondary-light",
  bgColor = "bg-brand-subtle",
  type = "button",
  form,
}) => {
  return (
    <button
      type={type}
      form={form}
      onClick={onClick}
      className={`
        z-51 w-8 h-8 grid place-items-center p-1 cursor-pointer
        rounded-full shadow-sm
        ${bgColor} ${textColor}
        opacity-75
        hover:opacity-100 transition
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default IconButton;
