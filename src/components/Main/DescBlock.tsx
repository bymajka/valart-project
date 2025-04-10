import { PropsInterfaces } from "../../utils/InterfacesAndTypes";
const DescBlock = ({
  imgPath,
  title,
  description,
  strong,
  altForImage,
}: PropsInterfaces.Desc) => {
  return (
    <div className="h-[303px] md:h-[291px] md:w-[354px] rounded-4xl bg-conic from-angular-gradient-1  via-angular-gradient-3 to-angular-gradient-6 flex justify-center items-center">
      <div className="w-[98%] h-[98%] rounded-4xl p-[40px] bg-black-bg">
        <img src={imgPath} alt={altForImage} className="mb-[20px]" />
        <h3 className="font-poppins-semibold text-[18px] mb-[8px]">{title}</h3>
        <p className="font-poppins-light text-[14px] leading-[20px]">
          {description.split(/(\s|\,|\.)+/).map((word) => {
            if (strong.split(/(\s|\,|\.)+/).includes(word)) {
              return <strong key={word}>{word} </strong>;
            } else {
              return <span key={word}>{word} </span>;
            }
          })}
        </p>
      </div>
    </div>
  );
};

export default DescBlock;
