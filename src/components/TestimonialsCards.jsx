const TestimonialsCards = ({
  testimonials: { img, alt, name, job, rate, msg },
}) => {
  //   const { img, alt, name, job, rate, msg } = testimonials;
  const maxStars = 5;
  return (
    <div>
      <div className="box relative p-5 bg-white rounded-lg shadow-custom-3 ">
        <img
          src={img}
          alt={alt}
          className="absolute -right-2.5 -top-12 h-24 w-24 rounded-full border-[10px] border-bg"
        />
        <h3 className="mb-2.5 text-xl font-bold">{name}</h3>
        <span className="title mb-2.5 text-gray-600">{job}</span>
        <div className="rate mt-2">
          {[...Array(maxStars)].map((_, index) => (
            <i
              key={index}
              className={
                index < rate
                  ? "filled fas fa-star mx-0.5  text-[#ffc107]"
                  : "far fa-star mx-0.5"
              }
            ></i>
          ))}
        </div>
        <p className="leading-normal text-gray-600 text-base mt-2.5 mb-0">
          {msg}
        </p>
      </div>
    </div>
  );
};

export default TestimonialsCards;
