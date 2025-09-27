import React from "react";

interface LabeledInputProps {
  label: string;
  type?: "text" | "number" | "checkbox";
  value: string | number | boolean;
  placeholder?: string;
  onChange: (value: string | number | boolean) => void;
  className?: string;
}

const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  type = "text",
  value,
  placeholder,
  onChange,
  className = "",
}) => {
  const baseClasses =
    "flex border divide-solid divide-x rounded-lg bg-brand-subtle text-brand-secondary-dark " +
    className;

  if (type === "checkbox") {
    return (
      <label
        className={`${baseClasses} items-center space-x-2 p-2 cursor-pointer`}
      >
        <input
          type="checkbox"
          checked={Boolean(value)}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span>{label}</span>
      </label>
    );
  }

  return (
    <div className={`${baseClasses}`}>
      <label className="w-16 p-2 bg-brand-subtle-dark rounded-s-lg">
        {label}
      </label>
      <input
        type={type}
        value={value as string | number}
        onChange={(e) =>
          onChange(type === "number" ? Number(e.target.value) : e.target.value)
        }
        placeholder={placeholder}
        className="p-2"
      />
    </div>
  );
};

export default LabeledInput;
