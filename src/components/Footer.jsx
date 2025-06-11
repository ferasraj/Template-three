import { ChevronsRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
import {
  footerGallery,
  footerIcon,
  footerLinks,
  footerLine,
} from "../assets/assets";

const hoverColors = {
  facebook: "hover:bg-[#1877f2]",
  twitter: "hover:bg-[#1da1f2]",
  youtube: "hover:bg-[#ff0000]",
  instagram: "hover:bg-[#e1306c]",
};
const getHoverColor = (icon) => {
  if (!icon) return "";
  const lowerIcon = icon.toLowerCase();
  const platform = Object.keys(hoverColors).find((key) =>
    lowerIcon.includes(key)
  );
  return hoverColors[platform] || "";
};

const footerIconClass = twMerge(
  "bg-[#313131] text-[#b9b9b9] inline-flex justify-center items-center",
  "w-[50px] h-[50px] text-xl transition-all duration-primary",
  "hover:text-white font-bold "
);

const Footer = () => {
  return (
    <section id="footer">
      <div
        className={twMerge(
          "footer sm:text-start text-center bg-[#191919] pt-[70px]"
        )}
      >
        <div className={twMerge("container grid grid-250 gap-10")}>
          <div className="box">
            <h3 className={twMerge("text-white text-6xl mb-5 font-bold")}>
              Raj Dev
            </h3>
            <ul
              className={twMerge("social flex justify-center sm:justify-start")}
            >
              {footerIcon.map((item) => {
                return (
                  <li key={item.id} className="mr-[10px]">
                    <a
                      href={item.herf}
                      aria-label={item.label}
                      className={twMerge(
                        footerIconClass,
                        getHoverColor(item.icon)
                      )}
                    >
                      <i className={item.icon}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className={twMerge("text leading-loose text-[#b9b9b9] my-4")}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus nulla rem, dign
            </p>
          </div>
          <div className="box">
            <ul className="links">
              {footerLinks.map((item) => (
                <li
                  key={item.text}
                  className={twMerge(
                    "px-0 transition-all duration-primary flex justify-center sm:justify-start",
                    "py-[15px] hover:pl-[10px]"
                  )}
                >
                  <a
                    href={item.herf}
                    className={twMerge(
                      "flex group text-[#b9b9b9] transition-all duration-primary hover:text-white"
                    )}
                  >
                    <ChevronsRight
                      className={twMerge(
                        "mr-[10px] text-secondary group-hover:text-primary"
                      )}
                    />
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={twMerge("box")}>
            {footerLine.map((item) => (
              <div
                key={item.id}
                className={twMerge(
                  "line flex flex-col sm:flex-row  items-center text-[#b9b9b9] mb-[30px]"
                )}
              >
                <i
                  className={twMerge(
                    "sm:mr-[10px] mr-0 sm:mb-0 mb-[15px]  text-[25px] text-primary",
                    item.icon
                  )}
                ></i>
                <div className={twMerge("info leading-relaxed flex-1")}>
                  {item.text && <div>{item.text}</div>}
                  {(item.tel1 || item.tel2) && (
                    <div className="numbers flex flex-col">
                      {item.tel1 && <span>{item.tel1}</span>}
                      {item.tel2 && <span>{item.tel2}</span>}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div
            className={twMerge(
              "box footer-gallery flex flex-wrap justify-center"
            )}
          >
            {footerGallery.map((item) => (
              <img
                key={item.alt}
                src={item.img}
                alt={item.alt}
                className={twMerge(
                  "w-[78px] h-[78px] border-white border-4 m-0.5"
                )}
              />
            ))}
          </div>
        </div>
        <p
          className={twMerge(
            "copyright py-[25px] mt-[50px] text-center text-white",
            "border-t-[1px]  border-t-[#444]"
          )}
        >
          Made By "Raj Dev"
        </p>
      </div>
    </section>
  );
};

export default Footer;
