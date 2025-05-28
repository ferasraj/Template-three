import { useEffect, useRef, useState } from "react";
import Megamenu from "./Megamenu";

const Header = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const megaMenuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // التحكم في scroll عند فتح القائمة الموبايل
  useEffect(() => {
    document.body.style.overflow = showMegaMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMegaMenu]);

  const navItems = [
    { href: "#article", label: "Article" },
    { href: "#gallery", label: "Gallery" },
    { href: "#features", label: "Features" },
    { href: "#", label: "Other Links" },
  ];

  const handleClick = (label) => {
    if (label === "Other Links") {
      setShowMegaMenu((prev) => !prev); //toggle
    } else {
      setShowMegaMenu(false);
    }
  };

  // إغلاق عند الضغط خارج الميجا منيو وزر "Other Links"
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(e.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(e.target)
      ) {
        setShowMegaMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <section id="header ">
      <div className="header bg-white shadow-[0_0_10px_#ddd] relative ">
        <div className="container relative flex justify-between items-center flex-wrap">
          <a
            href="#"
            className="logo text-primary text-[26px] font-bold
             sm:h-[72px] h-[50px] sm:w-auto w-full flex items-center justify-center"
          >
            Raj Dev.
          </a>
          <ul className="main-nav m-auto sm:m-0 flex text-black ">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  ref={item.label === "Other Links" ? toggleButtonRef : null}
                  onClick={() => handleClick(item.label)}
                  href={item.href}
                  className="
    flex relative sm:px-7 sm:py-0 p-2.5 sm:text-lg text-sm sm:h-[72px] h-[40px] 
    items-center justify-center overflow-hidden 
    transition-all duration-primary ease-in-out
    hover:text-primary hover:bg-[#fafafa]
    hover:before:left-0"
                >
                  {item.label}
                </a>
                {item.label === "Other Links" && (
                  <div ref={megaMenuRef}>
                    <Megamenu visible={showMegaMenu} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
