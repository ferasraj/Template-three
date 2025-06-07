import { useEffect, useState } from "react";
import { ChevronsUp } from "lucide-react";
import { twMerge } from "tailwind-merge";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const baseClasses =
    "fixed bottom-8 right-4 z-[999] w-10 h-10 rounded-full flex items-center justify-center text-white text-lg shadow-lg transition-all duration-300 ease-in-out transform-gpu bg-primary hover:bg-gray-400 focus:bg-gray-400 cursor-pointer hover:scale-110";
  const hiddenClasses = "opacity-0 translate-y-5 invisible";
  const visibleClasses = "opacity-80 translate-y-0 visible";
  const responsiveClasses =
    "md:bottom-10 md:right-3 md:w-10 md:h-10 md:text-sm";

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={twMerge(
        "relative group",
        baseClasses,
        visible ? visibleClasses : hiddenClasses,
        responsiveClasses
      )}
    >
      <ChevronsUp
        strokeWidth={2.75}
        className={twMerge(
          "animate-bouncing transition-all duration-300 ease-in-out mt-2"
        )}
      />
      {/* Tooltip */}
      <span
        className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2
             bg-gray-400 text-white text-xs px-1 py-1 rounded 
             opacity-0 group-hover:opacity-100 
             transition-opacity duration-300 whitespace-nowrap"
      >
        To Top
      </span>
    </button>
  );
};
export default ScrollToTopButton;
