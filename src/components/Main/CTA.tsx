import imgLogo from "../../assets/images/welcome-logo.png";
import imgLogoSm from "../../assets/images/welcome-logo-sm.png";

const smallScreenValue = 425;

const CTA = () => {
  return (
    <section className="h-[712px] md:h-[793px] bg-[url('./assets/images/welcome-bg-image.png')] bg-no-repeat bg-cover bg-center">
      <div className="backdrop-blur-[10px] h-full">
        {window.innerWidth >= smallScreenValue ? (
          <img
            src={imgLogo}
            className="w-full h-[258px] md:h-[683px] relative top-[134px] md:-top-[25px]"
            alt="Welcome Logo"
          />
        ) : (
          <img
            src={imgLogoSm}
            className="w-[543px] h-[258px] relative top-[134px]"
          />
        )}

        <h1 className="uppercase bg-gradient-to-r from-gold-21 to-gold-22 text-transparent bg-clip-text font-poppins-semibold text-center text-[24px] md:text-[30px] letter-spacing-[4%] relative top-[150px]  md:-top-[150px]">
          You want traffic?
          <br /> We build the f*cking highways.
        </h1>
        <button className="uppercase bg-gradient-to-r from-gold-21 to-gold-22 text-black-bg font-poppins-semibold text-[14px] md:text-[18px] px-[32px] md:px-[40px] py-[12px] md:py-[20px] rounded-full ml-auto mr-auto w-[203px] md:w-[260px] block relative bottom-[-175px] md:bottom-[125px] cursor-pointer hover:bg-gradient-to-r hover:from-gold-22 hover:to-gold-21">
          start advertising
        </button>
      </div>
    </section>
  );
};

export default CTA;
