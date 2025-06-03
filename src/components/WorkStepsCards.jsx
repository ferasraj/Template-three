import { twMerge } from "tailwind-merge";

const WorkStepsCards = ({ WorkSteps: { img, alt, title, para } }) => {
  return (
    <div
      className={twMerge(
        "boxWork relative flex sm:flex-row flex-col items-center",
        "bg-[#f6f5f5] p-8 mb-[20px]",
        "text-center sm:text-start rounded-[6px]",
        //before
        "border-2 border-white z-10",
        "before:content-[''] before:absolute before:top-1/2 before:left-1/2",
        "before:w-0 before:h-0 before:-translate-x-1/2 before:-translate-y-1/2",
        "before:bg-[#ededed] before:z-[-1]",
        "before:transition-all before:duration-300",
        //hover
        "hover:before:w-full hover:before:h-full hover:scale-[1.02] transition-transform"
      )}
    >
      <img
        src={img}
        alt={alt}
        className={twMerge("h-[64px] sm:mr-[30px] mr-0 mb-[30px] sm:mb-[0px]")}
      />
      <div className={twMerge("textWork")}>
        <h3 className={twMerge("m-0 text-2xl font-bold")}>{title}</h3>
        <p className={twMerge("text-[#777] leading-loose my-2.5 text-[18px]")}>
          {para}
        </p>
      </div>
    </div>
  );
};

export default WorkStepsCards;
