import closeIcon from "../../assets/images/svg/close.svg";
import { PropsInterfaces } from "../../utils/InterfacesAndTypes";

const LabelInput = ({
  name,
  text,
  type,
  labelStyle,
  inputStyle,
  placeholderText,
  complexStyle,
  errorMessage,
  ...rest
}: PropsInterfaces.LabelInput) => {
  return (
    <div className={`${complexStyle}`}>
      <label className={`${labelStyle}`}>{text}</label>
      <input
        name={name}
        type={type}
        className={`${inputStyle}`}
        placeholder={`${placeholderText ? placeholderText : ""}`}
        {...rest}
      />
      {errorMessage && (
        <p className="text-red-error flex flex-row items-center">
          <img
            src={closeIcon}
            alt="close"
            className="size-4 filter-(--my-error-filter) "
          />
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default LabelInput;
