import { getImageUrl } from "../../utils/ImageUtil";
import DescBlock from "./DescBlock";
import { descs } from "../../utils/constants";

const whyWorkWithUsDesc = descs.whyWorkWithUs;

const WhyWorkWithUs = () => {
  return (
    <section id="why-work-with-us">
      <h2 className="text-white font-poppins-semibold text-[24px] md:text-[28px] text-center pb-[40px]">
        Why Work With Us?
      </h2>
      <div className="flex flex-col md:flex-row md:w-[1176px] justify-between ml-auto mr-auto text-white gap-[40px]">
        {whyWorkWithUsDesc.map((desc) => (
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
      <p className="font-poppins-light text-[16px] md:text-[18px] text-center mt-[64px] md:mt-[110px] mb-[16px] text-white">
        <span className="font-poppins-semibold">
          Ready to stop playing small and start scaling like a beast?
        </span>
        <br />
        Let’s build the f*cking highway to your next payday.
      </p>
      <button className="uppercase bg-gradient-to-r from-gold-21 to-gold-22 text-black-bg font-poppins-semibold text-[14px] md:text-[18px] px-[32px] py-[12px] rounded-full ml-auto mr-auto w-[193px] md:w-[260px] block relative cursor-pointer hover:bg-gradient-to-r hover:from-gold-22 hover:to-gold-21">
        let's get started
      </button>
    </section>
  );
};

export default WhyWorkWithUs;
