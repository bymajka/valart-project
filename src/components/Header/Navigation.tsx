import { scrollPageTo } from "../utils/ScrollToPage.js";
import { useContext } from "react";
import { modalContext } from "../../App.js";
const Navigation = () => {
  const modalCtx = useContext(modalContext);

  return (
    <nav className="flex items-center flex-row absolute right-[12px] md:right-[66px] top-[10px] md:top-[16px] gap-[60px] md:w-[444px] h-[32px] md:h-[38px] text-[12px] font-poppins-semibold">
      <a
        href="#"
        className="h-[18px] smooth-scroll hidden md:block"
        onClick={(e) => {
          e.preventDefault();
          scrollPageTo("what-we-do");
        }}
      >
        WHAT WE DO
      </a>
      <a
        href="#"
        className="h-[18px] smooth-scroll hidden md:block"
        onClick={(e) => {
          e.preventDefault();
          scrollPageTo("why-work-with-us");
        }}
      >
        WHY WORK WITH US
      </a>
      <button
        className="group w-[123px] h-[32px] md:h-[38px] rounded-full bg-gradient-to-r from-gold-21 to-gold-22 flex items-center justify-center cursor-pointer transition-all duration-300 "
        onClick={(e) => {
          e.preventDefault();
          modalCtx(true);
        }}
      >
        <div className="w-[98%] h-[95%] md:h-[97%] rounded-full bg-black-bg flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gold-21 group-hover:to-gold-22">
          <p className="text-[12px] font-manrope font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-21 to-gold-22 transition-all duration-300 group-hover:text-black-bg">
            GET IN TOUCH
          </p>
        </div>
      </button>
    </nav>
  );
};

export default Navigation;
