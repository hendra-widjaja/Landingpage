import { AnimationOnScroll } from "react-animation-on-scroll";

export const Services = (props) => {
  return (
    <section id="services" className="mx-4 text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, index) => (
                <AnimationOnScroll
                  delay={index * 250}
                  animateOnce
                  animateIn="animate__fadeInTopLeft"
                  key={`${d.name}-${index}`}
                >
                  <div className="col-md-4">
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </AnimationOnScroll>
              ))
            : "loading"}
        </div>
      </div>
    </section>
  );
};
