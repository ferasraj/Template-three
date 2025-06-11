const Landing = () => {
  return (
    <section id="landing">
      <div className="landing relative ">
        <div className="container min-h-[calc(100vh-72px)] flex items-center pb-32">
          <div className="text flex-1 text-center md:text-left ">
            <h1 className="text-[28px] sm:text-[40px] font-bold m-0 tracking-2">
              Welcome, To Raj World
            </h1>
            <p
              className="text-lg sm:text-2xl leading-relaxed my-[10px] mx-auto md:mt-[5px]
             md:mx-0 md:my-0 text-[#666] max-w-[500px]"
            >
              Here Iam gonna share everything about my life. Books Iam reading,
              Games Iam Playing, Stories and Events
            </p>
          </div>
          <div className="image hidden md:flex ">
            <img
              className="relative w-[600px] animate-up-and-down -z-1"
              decoding="async"
              src="../src/assets/imgs/landing-image.png"
              alt="landing-image"
            />
          </div>
        </div>
        <a
          href="#articles"
          className="go-down text-primary absolute bottom-8 left-2/4 -translate-x-1/2 
          transition-all duration-primary hover:text-secondary "
        >
          <i className="animate-bouncing fas fa-angle-double-down fa-2x"></i>
        </a>
      </div>
    </section>
  );
};

export default Landing;
