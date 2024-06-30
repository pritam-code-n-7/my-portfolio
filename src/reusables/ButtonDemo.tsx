import { ButtonTypes } from "./ButtonTypes";

const ButtonDemo = ({ name, type, onClick, className,  }: ButtonTypes) => {
  return (
    <div className="mt-2">
      <button type={type} onClick={onClick} className={className} >
        {name}
      </button>
    </div>
  );
};

export default ButtonDemo;
