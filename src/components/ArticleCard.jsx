const ArticleCard = ({ article }) => {
  return (
    <card>
      <div
        className="box-article bg-white shadow-custom rounded-[6px] overflow-hidden
                transition-transform duration-primary group 
                hover:-translate-y-[10px] hover:shadow-[0_2px_15px_rgb(0_0_0_/_0.2)]  "
      >
        <img
          src={article.img}
          alt={article.alt}
          className=" w-full max-w-full border-none"
        />
        <div className="content p-5">
          <h3 className="m-0 font-bold text-lg">{article.title}</h3>
          <p className="leading-normal mt-2.5 mb-0 mx-0 text-[#777]">
            {article.paragraph}
          </p>
        </div>
        <div className="info flex justify-between items-center p-5 border-t-[1px] border-[#e6e6e7]">
          <a href="#" className="text-primary font-bold  hover:underline">
            {article.more}
          </a>
          <i
            className={`${article.arrow} text-primary text-sm font-extralight group-hover:animate-moving-arrow`}
          ></i>
        </div>
      </div>
    </card>
  );
};

export default ArticleCard;
