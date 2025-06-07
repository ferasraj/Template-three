import { twMerge } from "tailwind-merge";
import { Check } from "lucide-react";

const boxPriceClasses = twMerge(
  "box-price relative bg-white",
  "shadow-custom-2 transition-transform duration-primary",
  "text-center items-center flex flex-col z-10",
  // ::before
  "before:content-[''] before:absolute before:top-0 before:left-0",
  "before:h-1/2 before:w-0 before:bg-[#f6f6f6]",
  "before:z-[-1] before:transition-all before:duration-300",
  "hover:before:w-full",
  // ::after
  "after:content-[''] after:absolute after:bottom-0 after:right-0",
  "after:h-1/2 after:w-0 after:bg-[#f6f6f6]",
  "after:z-[-1] after:transition-all after:duration-300",
  "hover:after:w-full"
);

const PricingCards = ({
  prices: { type, img, alt, amount, time, features },
}) => {
  const isPopular = type === "Advanced"; // or id === 2

  return (
    <div
      className={twMerge(
        boxPriceClasses,
        isPopular && "transform -translate-y-5"
      )}
    >
      {isPopular && (
        <div
          className={twMerge(
            "isPopular absolute right-[20px] w-[40px]",
            "bg-primary text-white font-bold",
            "pt-[10px] pr-[5px] pb-[35px] pl-[10px]",
            "text-[18px]",
            "after:content-[''] after:absolute after:bottom-[0px] after:right-0",
            "after:border-[20px] after:border-transparent after:border-b-white",
            "after:transition-all after:duration-300"
          )}
        >
          Most Popular
        </div>
      )}
      <div
        className={twMerge(
          "title-price font-bold text-[25px] my-8 tracking-[-1px] "
        )}
      >
        {type}
      </div>
      <img src={img} alt={alt} className={twMerge("w-[80px] mb-8")} />
      <div className="price">
        <span
          className={twMerge(
            "amount-price block text-6xl font-bold mb-1.5 text-primary"
          )}
        >
          {amount}
        </span>
        <span className={twMerge("time-price text-[#777] ")}>{time}</span>
      </div>
      <ul className={twMerge("features-price w-full text-left mt-5")}>
        {features.map((feature) => (
          <li
            key={feature}
            className={twMerge("flex p-5 border-t-[1px] border-[#eee]")}
          >
            <Check size={26} strokeWidth={3} className="text-primary mr-2.5" />
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={twMerge(
          "block w-fit border-2 border-primary text-primary mx-auto ",
          "mt-[30px] mb-[40px] px-[20px] py-[10px]",
          "rounded-[6px] font-bold transition-all duration-300",
          "hover:bg-[#1787e0] hover:border-2 hover:border-[#1787e0] hover:text-white"
        )}
      >
        Choose Plan
      </a>
    </div>
  );
};

export default PricingCards;
