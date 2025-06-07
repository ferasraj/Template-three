import PricingCards from "./PricingCards";
import { pricingData } from "../assets/assets";

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="Pricing py-primary relative bg-bg">
        <div className="dots dots-up"></div>
        <div className="dots dots-down"></div>
        <h2 className="main-title uppercase">Pricing Plans</h2>
        <div className="container">
          <div className="grid grid-auto-300 gap-8">
            {pricingData.map((price) => (
              <PricingCards key={price.id} prices={price} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
