import closeIcon from "../../assets/images/svg/close.svg";
interface LabelInputProps {
  text: string;
  type: string;
  labelStyle?: string;
  inputStyle?: string;
  placeholderText?: string;
  complexStyle?: string;
  errorMessage?: string;
}

const LabelInput = ({
  text,
  type,
  labelStyle,
  inputStyle,
  placeholderText,
  complexStyle,
  errorMessage,
  ...rest
}: LabelInputProps) => {
  return (
    <div className={`${complexStyle}`}>
      <label className={`${labelStyle}`}>{text}</label>
      <input
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
