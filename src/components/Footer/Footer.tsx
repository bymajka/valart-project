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
    title: "contact@valartads.com",
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="border-1 border-[#ffffff10] h-[81px] bg-black-bg relative px-[135px] py-[24px] flex justify-between items-center">
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
