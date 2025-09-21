import React from "react";
import { buttonColors } from "../../assets/theme/buttonColors";
import { useNavigate } from "react-router-dom";

type ButtonColors = keyof typeof buttonColors;

interface ButtonProps {
  text: string;
  color?: ButtonColors;
  to?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  color = "secondary",
  to,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    }
  };

  return (
    <button
      className={`rounded py-1.5 px-3 border border-transparent text-center text-sm transition-all shadow-sm hover:shadow focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${buttonColors[color]}`}
      type="button"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
