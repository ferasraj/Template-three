import { linksGroup1, linksGroup2 } from "../assets/assets.js";
import { useEffect, useState } from "react";

const Megamenu = ({ visible }) => {
  const [shouldRender, setShouldRender] = useState(visible);

  //استخدام الانيميشن للميجا منيو
  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    } else {
      const timeout = setTimeout(() => setShouldRender(false), 300); // نفس مدة الأنيميشن
      return () => clearTimeout(timeout);
    }
  }, [visible]);

  const LinksList = ({ links }) => (
    <ul className="links min-w-60 flex-1">
      {links.map((link, index) => (
        <li key={index.href} className="relative hover:before:w-full">
          <a
            href={link.href}
            className="text-primary p-3.5 block text-lg font-bold"
          >
            <i className={`${link.icon} fa-fw mr-2.5`}></i> {link.text}
          </a>
        </li>
      ))}
    </ul>
  );

  if (!shouldRender) return null;

  return (
    <section>
      <div
        className={`
    mega-menu bg-white absolute w-full left-0 sm:p-8 p-[5px] border-b-4 
    border-primary z-50 flex sm:flex-row flex-col sm:gap-10 gap-0
    ${visible ? "animate-slide-up" : "fade-out"}
  `}
      >
        <div className="image hidden md:block ">
          <img
            src="/src/assets/imgs/megamenu.png"
            alt="megamenu"
            className="max-w-full "
          />
        </div>
        <LinksList links={linksGroup1} />
        <LinksList links={linksGroup2} />
      </div>
    </section>
  );
};

export default Megamenu;
