import WhatWeDo from "./WhatWeDo";
import WhyWorkWithUs from "./WhyWorkWithUs";
import backgroundImage from "../../assets/images/background_image.png";

const MainContent = () => {
  return (
    <section className="bg-black-bg relative overflow-clip pb-[102px]">
      <p className="text-white pt-[90px] relative block ml-auto mr-auto w-[994px] text-center text-[18px] pb-[51px]">
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
        className="absolute right-0 w-[500px] h-[500px] bottom-[-150px]"
      />
    </section>
  );
};

export default MainContent;
