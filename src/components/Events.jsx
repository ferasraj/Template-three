import { twMerge } from "tailwind-merge";
import EmailCard from "./EmailCard";
import EventsCards from "./EventsCards";

const Events = () => {
  return (
    <section id="events">
      <div className="events py-primary relative">
        <div className="dots dots-up"></div>
        <div className="dots dots-down"></div>
        <h2 className="main-title uppercase">Latest Events</h2>
        <div className="container">
          <div className="flex items-center flex-wrap">
            <img
              src="/src/assets/imgs/events.png"
              alt="events main image"
              className="max-w-[450px] hidden md:block"
            />
            <div className="info-events flex-[1]">
              <EventsCards />

              <h2
                className={twMerge(
                  "title-events text-center my-7 text-3xl font-bold"
                )}
              >
                Tech Masters Event 2021
              </h2>
              <p
                className={twMerge(
                  "description-events text-center leading-relaxed text-xl text-[#777]"
                )}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero
                tenetur doloremque iusto ut adipisci quam ratione aliquam
                excepturi nulla in harum, veritatis porro
              </p>
            </div>
            <EmailCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
