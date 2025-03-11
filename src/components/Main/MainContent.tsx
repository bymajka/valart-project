import WhatWeDo from "./WhatWeDo";
import WhyWorkWithUs from "./WhyWorkWithUs";
import backgroundImage from "../../assets/images/background_image.png";

const MainContent = () => {
  return (
    <section className="bg-black-bg relative overflow-clip pb-[170px] md:pb-[102px] px-[24px] md:px-0">
      <p className="text-white pt-[90px] font-poppins-light relative block ml-auto mr-auto w-[354px] md:w-[994px] text-center text-[16px] md:text-[18px] pb-[51px]">
        We’re <span className="font-poppins-semibold">ValArt Ads</span> - a
        media-buying powerhouse built for affiliates who want to scale hard and{" "}
        <span className="font-poppins-semibold">cash out big</span>. No <br />
        fluff. No guesswork. Just{" "}
        <span className="font-poppins-semibold">
          data-driven campaigns
        </span>{" "}
        that turn traffic into commissions on autopilot.
      </p>

      <WhatWeDo />
      <WhyWorkWithUs />

      <img
        src={backgroundImage}
        alt="Valart"
        className="absolute right-0 w-[293px] md:w-[500px] h-[293px] md:h-[500px] bottom-[-90px] md:bottom-[-150px]"
      />
    </section>
  );
};

export default MainContent;
