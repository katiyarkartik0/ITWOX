import { Loader } from "utils/Loader/Loader";
import "./Button.css";

interface ButtonProps {
  type: "submit" | "button";
  text: string;
  onClickEvent?: () => void;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  style?:object
}

const Button: React.FC<ButtonProps> = ({
  type,
  text,
  onClickEvent = () => {},
  className,
  disabled = false,
  isLoading = false,
  style
}) => {
  const classes =
    "app-button-component" +
    " " +
    className +
    " " +
    (disabled === true ? "isDisabled" : "");
  return (
    <button
      type={type}
      className={classes}
      onClick={onClickEvent}
      disabled={disabled}
      style={style}
    >
      {isLoading ? <Loader /> : text}
    </button>
  );
};

export default Button;
