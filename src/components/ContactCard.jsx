import { twMerge } from "tailwind-merge";

const ContactCard = ({ icon, text, tel1, tel2 }) => {
  return (
    <div>
      <div className={twMerge("box")}>
        <div
          className={twMerge(
            "line flex flex-col sm:flex-row  items-center text-[#b9b9b9] mb-[30px]"
          )}
        >
          <i
            className={twMerge(
              "sm:mr-[10px] mr-0 sm:mb-0 mb-[15px]  text-[25px] text-primary",
              icon
            )}
          ></i>
          <div className={twMerge("info leading-relaxed flex-1")}>
            {text ? (
              <div>{text}</div>
            ) : (
              <div className="numbers flex flex-col">
                <span>{tel1}</span>
                <span>{tel2}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
