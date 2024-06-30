import { InputTypes } from "./InputTypes";

const InputField = ({
  htmlFor,
  label,
  type,
  id,
  onChange,
  value,
  className,
}: InputTypes) => {
  return (
    <div>
      <div>
        <label htmlFor={htmlFor} className="p-2 text-white">
          {label}
        </label>
      </div>
      <input
        type={type}
        id={id}
        onChange={onChange}
        value={value}
        className={className}
      />
    </div>
  );
};

export default InputField;
