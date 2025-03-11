import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="relative md:h-[72px] bg-black-bg text-white z-1 h-[52px]">
      <p className="header_logo-text absolute left-[12px] md:left-[64px] top-[14px] bottom-[14px] h-[25px] md:h-[44px] text-transparent bg-clip-text bg-gradient-to-r from-gold-21 to-gold-22 font-montserrat-medium cursor-pointer text-[10px] md:text-[16px]">
        <strong className="font-montserrat-extrabold">VALART</strong>
        <br /> ADS
      </p>
      <Navigation />
    </header>
  );
};

export default Header;
