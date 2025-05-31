import ServiceCard from "./ServiceCard";
import { serviceData } from "../assets/assets";

const Services = () => {
  return (
    <section id="services">
      <div className=" services py-primary relative bg-bg ">
        <h2 className="main-title uppercase">Services</h2>
        <div className="container">
          <div className="grid grid-auto-300 gap-10 ">
            {serviceData.map((service) => (
              <ServiceCard key={service.id} services={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
