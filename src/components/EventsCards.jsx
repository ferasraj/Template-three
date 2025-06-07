import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";
import { eventUnits } from "../assets/assets";

const EventsCards = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const baseUnitClass =
    "border border-gray-300 rounded-md text-center w-20 transition-all duration-300";
  const baseNumberClass =
    "block text-[35px] py-4 text-primary font-bold transition-all duration-300";
  const baseLabelClass =
    "block text-xs py-2 border-t border-gray-300 transition-all duration-300";

  return (
    <div
      ref={ref}
      className="flex items-center justify-center my-10 mt-0 gap-5"
    >
      {eventUnits.map((unit, index) => (
        <div
          key={index}
          className={twMerge(baseUnitClass, "hover:border-primary group")}
        >
          <span className={twMerge(baseNumberClass)}>
            {inView ? <CountUp end={unit.end} duration={2} start={0} /> : 0}
          </span>
          <span
            className={twMerge(baseLabelClass, "group-hover:border-t-primary")}
          >
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default EventsCards;
