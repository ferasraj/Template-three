import { twMerge } from "tailwind-merge";

const FeaturesCards = ({ features: { img, alt, type, para, color } }) => {
  const colorTextMap = {
    red: "text-[#f44036]",
    green: "text-[#009688]",
    blue: "text-[#03a9f4]",
  };
  const colorBorderMap = {
    red: "border-[#f44036]",
    green: "border-[#009688]",
    blue: "border-[#03a9f4]",
  };
  const colorBgAfterMap = {
    red: "after:bg-[#f44036]",
    green: "after:bg-[#009688]",
    blue: "after:bg-[#03a9f4]",
  };
  const colorBgBeforeMap = {
    red: "before:bg-[rgb(244_64_54/60%)]",
    green: "before:bg-[rgb(0_150_136/60%)]",
    blue: "before:bg-[rgb(3_169_244/60%)]",
  };
  const colorBgMap = {
    red: "bg-[linear-gradient(to_right,_#f44036_50%,white_50%)]",
    green: "bg-[linear-gradient(to_right,_#009688_50%,white_50%)]",
    blue: "bg-[linear-gradient(to_right,_#03a9f4_50%,white_50%)]",
  };
  const imageHolderClasses = twMerge(
    "img-holder relative overflow-hidden",
    //before
    "before:content-[''] before:absolute before:top-[-1px] before:left-0 before:w-full before:h-full",
    colorBgBeforeMap[color],
    //after
    "after:content-[''] after:absolute after:bottom-0 after:right-0",
    "after:border after:border-b-[170px] after:border-l-[500px]",
    "after:border-t-0 after:border-r-0 after:border-transparent after:border-b-white",
    "after:transition-all after:duration-300",
    //group hover
    "group-hover:after:border-t-[170px] group-hover:after:border-r-[500px]",
    "group-hover:after:border-b-[170px] group-hover:after:border-l-0"
  );

  return (
    <div className={twMerge("boxFeat text-center group border border-[#ccc]")}>
      <div className={imageHolderClasses}>
        <img src={img} alt={alt} className={twMerge("w-full")} />
      </div>
      <h2
        className={twMerge(
          "relative text-[40px] m-auto w-fit font-bold",
          //after
          "after:content-[''] after:absolute after:bottom-[-20px]",
          "after:left-[15px] after:h-[5px] after:w-[calc(100%-30px)] ",
          colorBgAfterMap[color]
        )}
      >
        {type}
      </h2>
      <p
        className={twMerge(
          "text-[20px] leading-[2] my-[30px] text-[#777] mx-0 p-6"
        )}
      >
        {para}
      </p>
      <a
        className={twMerge(
          "block",
          "bg-[length:200%_100%] bg-[position:right_bottom]",
          "border-[3px] ",
          "w-fit ",
          "mx-auto mb-[30px]",
          "font-bold text-[22px]",
          "py-[7px] px-[30px]",
          "rounded-[6px]",
          "transition-all duration-300 ",
          //hover
          "group-hover:text-white",
          "group-hover:bg-[position:left_bottom]",
          colorTextMap[color],
          colorBorderMap[color],
          colorBgMap[color]
        )}
        href="#"
      >
        More
      </a>
    </div>
  );
};

export default FeaturesCards;
