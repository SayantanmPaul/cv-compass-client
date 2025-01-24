import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  className,
}) => {
  return (
    <label
      className={`flex items-center space-x-2 cursor-pointer select-none ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="cyberpunk-checkbox appearance-none lg:w-5 lg:h-5 md:w-5 md:h-5 w-4 h-4 border-2 border-[#D7700B] rounded-none bg-transparent relative cursor-pointer peer"
      />
      <span className="peer-checked:text-[#D7700B] duration-200 ease-in-out">
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
