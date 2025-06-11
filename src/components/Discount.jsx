import { twMerge } from "tailwind-merge";
import DiscountForm from "./DiscountForm";

const Discount = () => {
  return (
    <div
      id="discount"
      className={twMerge(
        "discount min-h-screen flex flex-col  md:flex-row flex-warp "
      )}
    >
      <div
        className={twMerge(
          "relative flex md:basis-1/2 basis-full",
          "image bg-[url('/src/assets/imgs/discount-background1.jpg')] bg-cover",
          "text-white items-center justify-center z-10 animate-change-background",
          // before
          "before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full",
          "before:bg-[rgb(23_135_224/97%)] before:-z-10"
        )}
      >
        <div
          className={twMerge(
            "content flex flex-col justify-center text-center p-5 items-center"
          )}
        >
          <h2 className={twMerge("text-[40px] tracking-[-2px] font-bold mb-8")}>
            We Have A Discount
          </h2>
          <p
            className={twMerge(
              "leading-relaxed text-[18px] max-w-[500px] mb-5"
            )}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            asperiores consectetur, recusandae ratione provident necessitatibus,
            cumque delectus commodi fuga praesentium beatae. Totam vel similique
            laborum dicta aperiam odit doloribus corporis.
          </p>
          <img
            src="src/assets/imgs/discount.png"
            alt="discount image"
            className="w-[300px]"
          />
        </div>
      </div>
      <DiscountForm />
    </div>
  );
};

export default Discount;
