const CTA = () => {
  return (
    <section className="h-[793px] bg-[url('./assets/images/welcome-bg-image.png')] bg-no-repeat bg-cover bg-center">
      <div className="backdrop-blur-[10px] h-full">
        <img
          src="src\assets\images\welcome-logo.png"
          className="w-full h-[683px] relative -top-[25px]"
          alt="Welcome Logo"
        />
        <h1 className="uppercase bg-gradient-to-r from-gold-21 to-gold-22 text-transparent bg-clip-text font-poppins-semibold text-center text-[30px] letter-spacing-[4%] relative -top-[150px]">
          You want traffic?
          <br /> We build the f*cking highways.
        </h1>
        <button className="uppercase bg-gradient-to-r from-gold-21 to-gold-22 text-black-bg font-poppins-semibold text-[18px] px-[40px] py-[20px] rounded-full ml-auto mr-auto w-[260px] block relative bottom-[125px] cursor-pointer hover:bg-gradient-to-r hover:from-gold-22 hover:to-gold-21">
          start advertising
        </button>
      </div>
    </section>
  );
};

export default CTA;
