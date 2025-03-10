interface DescProps {
  imgPath: string;
  title: string;
  description: string;
  strong: string;
  altForImage: string;
}
const DescBlock = ({
  imgPath,
  title,
  description,
  strong,
  altForImage,
}: DescProps) => {
  return (
    <div className="flex-1/3 rounded-4xl bg-conic from-angular-gradient-1  via-angular-gradient-3 to-angular-gradient-6 flex justify-center items-center">
      <div className="w-[99%] h-[98%] rounded-4xl p-[40px] bg-black-bg">
        <img src={imgPath} alt={altForImage} className="mb-[20px]" />
        <h3 className="font-poppins-semibold text-[18px] mb-[8px]">{title}</h3>
        <p className="font-poppins-light">
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
