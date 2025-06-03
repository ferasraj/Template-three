import clsx from "clsx";

const TeamCards = ({ teams: { name, img, alt, des } }) => {
  return (
    <div
      className={clsx(
        "boxTeam relative  group",
        //before
        "before:content-[''] before:absolute before:top-0 before:right-0",
        "before:h-full before:mb-14 before:w-[calc(100%-60px)]",
        "before:bg-[#f3f3f3] before:rounded-lg",
        "before:transition-all before:duration-300",
        "before:z-[-2] z-[0]",
        //after
        "after:content-[''] after:absolute after:top-0 after:right-0",
        "after:h-full after:mb-14 after:w-[0]",
        "after:bg-[#e4e4e4] after:rounded-lg",
        "after:transition-all after:duration-300",
        "after:z-[-1] after:opacity-100 ",
        //hover-after
        "hover:after:w-[calc(100%-60px)]"
      )}
    >
      <div className="dataTeam flex flex-row pt-[60px]">
        <img
          src={img}
          alt={alt}
          className="w-[calc(100%-60px)] rounded-2xl group-hover:grayscale-100
          transition-all duration-300 "
        />
        <div className="socialFea flex flex-col gap-5 w-[60px] items-center justify-center">
          <a
            href="#"
            className="w-[60px] h-[30px] flex justify-center items-center"
          >
            <i className="fab fa-facebook-f text-[#777]  transition-all duration-300 "></i>
          </a>
          <a
            href="#"
            className="w-[60px] h-[30px] flex justify-center items-center "
          >
            <i className="fab fa-twitter text-[#777] transition-all duration-300"></i>
          </a>
          <a
            href="#"
            className="w-[60px] h-[30px] flex justify-center items-center "
          >
            <i className="fab fa-linkedin-in text-[#777] transition-all duration-300"></i>
          </a>
          <a
            href="#"
            className="w-[60px] h-[30px] flex justify-center items-center "
          >
            <i className="fab fa-youtube text-[#777] transition-all duration-300"></i>
          </a>
        </div>
      </div>
      <div className="infoTeam pl-[80px] mt-5 ">
        <h3 className="text-[22px] font-bold group-hover:text-[#777] text-primary mb-0 transition-all duration-300">
          {name}
        </h3>
        <p className=" mb-[25px] mt-[10px]">{des}</p>
      </div>
    </div>
  );
};

export default TeamCards;
