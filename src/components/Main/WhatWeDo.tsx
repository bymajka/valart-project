import DescBlock from "./DescBlock";
import { getImageUrl } from "../../utils/ImageUtil";
import { descs } from "../../utils/constants";

const whatWeDoDesc = descs.whatWeDo;

const WhatWeDo = () => {
  return (
    <section id="what-we-do">
      <h2 className="text-white font-poppins-semibold text-[24px] md:text-[28px] text-center pb-[40px]">
        What We Do
      </h2>
      <div className="flex flex-col md:flex-row md:w-[1176px] justify-between ml-auto mr-auto text-white gap-[24px] md:gap-[40px]">
        {whatWeDoDesc.map((desc) => (
          <DescBlock
            key={desc.title}
            imgPath={getImageUrl(desc.imgPath)}
            title={desc.title}
            description={desc.description}
            strong={desc.strong}
            altForImage={desc.title}
          />
        ))}
      </div>
      <p className="font-poppins-light text-[16px] md:text-[18px] text-center my-[64px] md:my-[90px] text-white">
        We don’t chase trends - we create them. With the firepower of data,
        experience, <br />
        and an unbeatable network, we turn ad spend into pure profit.
      </p>
    </section>
  );
};

export default WhatWeDo;
