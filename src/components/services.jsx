import { AnimationOnScroll } from "react-animation-on-scroll";

export const Services = (props) => {
  return (
    <section id="services">
      <div className="section-top">
        <h2>Our Services</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </p>
      </div>

      <div className="section-bottom">
        {props.data
          ? props.data.map((d, index) => (
              <AnimationOnScroll
                delay={index * 250}
                animateOnce
                animateIn="animate__fadeInTopLeft"
                key={`${d.name}-${index}`}
                className="card"
              >
                <i className={d.icon}></i>
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </AnimationOnScroll>
            ))
          : "loading"}
      </div>
    </section>
  );
};
