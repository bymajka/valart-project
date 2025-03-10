import DescBlock from "./DescBlock";
import imgPath1 from "../../assets/images/iconset1.png";
import imgPath2 from "../../assets/images/iconset2.png";
import imgPath3 from "../../assets/images/iconset3.png";

const descs = [
  {
    imgPath: imgPath1,
    title: "We Buy, You Earn",
    description: "High-converting paid traffic that keeps your revenue flowing",
    strong: "keeps your revenue flowing",
    altForImage: "Increasing Traffic",
  },
  {
    imgPath: imgPath2,
    title: "Data > Gut Feeling",
    description: "Every ad, every bid, every campaign is optimized for max ROI",
    strong: "optimized for max ROI",
    altForImage: "Data Driven Optimization",
  },
  {
    imgPath: imgPath3,
    title: "Traffic That Prints Money",
    description: "If it scales, we run it. Simple as that.",
    strong: "scales run it",
    altForImage: "Printing Money",
  },
];
const WhatWeDo = () => {
  return (
    <section id="what-we-do">
      <h2 className="text-white font-poppins-semibold text-[28px] text-center pb-[40px]">
        What We Do
      </h2>
      <div className="flex flex-row w-[1176px] justify-between ml-auto mr-auto text-white gap-[40px]">
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
      <p className="font-poppins-light text-[18px] text-center my-[90px] text-white">
        We don’t chase trends - we create them. With the firepower of data,
        experience, <br />
        and an unbeatable network, we turn ad spend into pure profit.
      </p>
    </section>
  );
};

export default WhatWeDo;
