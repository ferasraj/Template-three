const ServiceCard = ({ services: { type, icon, details } }) => {
  return (
    <div>
      <div
        className="box group shadow-custom-4 bg-white transition-transform duration-primary relative
      hover:transform-[translateY(-10px)] hover:before:w-full "
      >
        <i
          className={`${icon}   top-1/2 left-1/2 translate-x-[-50%] translate-y-[50%] 
          mb-7  text-[#d5d5d5] relative group-hover:text-primary/80 
          `}
        ></i>
        <h3 className="title text-primary font-bold text-2xl text-center mt-5 mb-10 mx-0">
          {type}
        </h3>
        <div className="info relative p-3.5 bg-[#f9f9f9] text-right">
          <a href="#" className="text-primary hover:text-primary/80 font-bold">
            {details}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
