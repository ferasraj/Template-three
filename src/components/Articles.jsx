import { articleData } from "../assets/assets.js";
const Articles = () => {
  return (
    <section id="articles">
      <div className="articles py-primary relative">
        <h2 className="main-title">Articles</h2>
        <div className="container">
          <div className="  grid grid-250 gap-10  ">
            {articleData.map((articles, index) => (
              <div
                key={index}
                className="box-article bg-white shadow-custom rounded-[6px] overflow-hidden
                transition-transform duration-primary group 
                hover:-translate-y-[10px] hover:shadow-[0_2px_15px_rgb(0_0_0_/_0.2)]  "
              >
                <img
                  src={articles.img}
                  alt={articles.alt}
                  className=" w-full max-w-full border-none"
                />
                <div className="content p-5">
                  <h3 className="m-0 font-bold text-lg">{articles.title}</h3>
                  <p className="leading-normal mt-2.5 mb-0 mx-0 text-[#777]">
                    {articles.paragraph}
                  </p>
                </div>
                <div className="info flex justify-between items-center p-5 border-t-[1px] border-[#e6e6e7]">
                  <a
                    href=""
                    className="text-primary font-bold  hover:underline"
                  >
                    {articles.more}
                  </a>
                  <i
                    className={`${articles.arrow} text-primary text-sm font-extralight group-hover:animate-moving-arrow`}
                  ></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
