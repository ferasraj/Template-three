import { testimonialsData } from "../assets/assets";
import TestimonialsCards from "./TestimonialsCards";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="testimonials py-primary  relative bg-bg">
        <h2 className="main-title uppercase">Testimonials</h2>
        <div className="container">
          <div className="grid grid-auto-300 gap-10">
            {testimonialsData.map((testimonial) => (
              <TestimonialsCards
                key={testimonial.id}
                testimonials={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
