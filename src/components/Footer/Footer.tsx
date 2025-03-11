import linkedInImg from "../../assets/images/svg/linkedIn.svg";

const footerLinks = [
  {
    title: "© 2024 ValArt Ads. All Rights Reserved.",
    link: "#",
  },
  {
    title: "Privacy Policy",
    link: "#",
  },
  {
    title: "Terms of Service",
    link: "#",
  },
  {
    title: "support@valart-ads.com",
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="border-1 border-[#ffffff10] h-[288px] md:h-[81px] bg-black-bg relative px-[16px] md:px-[135px] py-[24px] flex flex-col md:flex-row justify-between items-start">
      {footerLinks.map((link) => (
        <a className="font-poppins-light text-[#ffffff60] cursor-pointer">
          {link.title}
        </a>
      ))}
      <img src={linkedInImg} alt="LinkedIn" className="cursor-pointer" />
    </footer>
  );
};

export default Footer;
