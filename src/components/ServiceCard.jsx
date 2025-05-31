import clsx from "clsx";

const ServiceCard = ({ services: { type, icon, details, color } }) => {
  const colorMap = {
    red: "text-red-600",
    yellow: "text-yellow-500",
    pink: "text-pink-600",
    green: "text-green-500",
    black: "text-black",
    primary: "text-primary",
  };
  const hoverColorMap = {
    red: "group-hover:text-red-600",
    yellow: "group-hover:text-yellow-500",
    pink: "group-hover:text-pink-600",
    green: "group-hover:text-green-500",
    black: "group-hover:text-black",
    primary: "group-hover:text-primary/80",
  };
  const bgColorMap = {
    red: "before:bg-red-600",
    yellow: "before:bg-yellow-500",
    pink: "before:bg-pink-600",
    green: "before:bg-green-500",
    black: "before:bg-black",
    primary: "before:bg-primary",
  };
  const beforeBgColorMap = {
    red: "before:bg-red-600",
    yellow: "before:bg-yellow-500",
    pink: "before:bg-pink-600",
    green: "before:bg-green-500",
    black: "before:bg-black",
    primary: "before:bg-primary",
  };

  return (
    <div>
      <div
        className={clsx(
          "boxServ group shadow-custom-4 bg-white",
          "transition-transform duration-300 relative",
          "hover:transform-[translateY(-10px)]",
          // before pseudo-element:
          "before:content-[''] before:absolute before:left-1/2 before:top-[-3px]",
          "before:translate-x-[-50%] before:h-[3px] before:w-0",
          "before:transition-all before:duration-300",
          "hover:before:w-full",
          bgColorMap[color]
        )}
      >
        <i
          className={clsx(
            icon,
            "relative mb-7 text-[#d5d5d5] ",
            "top-1/2 left-1/2 translate-x-[-50%] translate-y-[50%]",
            hoverColorMap[color]
          )}
        ></i>
        <h3
          className={clsx(
            "font-bold text-2xl",
            "text-center mt-5 mb-10 mx-0",
            colorMap[color]
          )}
        >
          {type}
        </h3>
        <div
          className={clsx(
            "infoServ relative p-3.5 text-right bg-[#f9f9f9]",

            // ::before (Num):
            "before:content-['0'counter(service-counter)]",
            "before:absolute before:left-0 before:top-0 before:h-full before:w-[100px]",
            "before:text-white before:text-[30px] before:font-bold before:pr-5",
            "before:flex before:justify-center before:items-center",
            beforeBgColorMap[color],

            // ::after
            "after:content-[''] after:absolute after:top-0 after:left-[80px]",
            "after:w-[50px] after:h-[calc(100%+1px)] after:bg-[#d5d5d5]",
            "after:[transform:skewX(-30deg)]"
          )}
        >
          <a
            href="#"
            className={clsx(
              colorMap[color],
              " opacity-75 hover:opacity-100 font-bold"
            )}
          >
            {details}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
