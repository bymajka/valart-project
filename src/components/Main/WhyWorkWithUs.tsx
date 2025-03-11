import DescBlock from "./DescBlock";
import imgPath1 from "../../assets/images/iconset4.png";
import imgPath2 from "../../assets/images/iconset5.png";
import imgPath3 from "../../assets/images/iconset6.png";

const descs = [
  {
    imgPath: imgPath1,
    title: "Performance-Obsessed",
    description: `We don’t do “brand awareness.” We do profit.`,
    strong: "profit",
    altForImage: "Performance",
  },
  {
    imgPath: imgPath2,
    title: "Test. Optimize. Scale. Repeat",
    description: "Constant iteration for consistent, sustainable earnings.",
    strong: "consistent, sustainable earnings",
    altForImage: "Increasing Traffic",
  },
  {
    imgPath: imgPath3,
    title: "No BS, Just Results",
    description: "Your ROI is the only metric that matters",
    strong: "ROI only metric that matters",
    altForImage: "Goals",
  },
];

const WhyWorkWithUs = () => {
  return (
    <section id="why-work-with-us">
      <h2 className="text-white font-poppins-semibold text-[24px] md:text-[28px] text-center pb-[40px]">
        Why Work With Us?
      </h2>
      <div className="flex flex-col md:flex-row md:w-[1176px] justify-between ml-auto mr-auto text-white gap-[40px]">
        {descs.map((desc) => (
          <DescBlock
            imgPath={desc.imgPath}
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
