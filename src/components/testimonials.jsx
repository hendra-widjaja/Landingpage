import { AnimationOnScroll } from "react-animation-on-scroll";

export const Testimonials = (props) => {
  return (
    <section id="testimonials">
      <div className="section-top">
        <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
          <h2>What our clients say</h2>
        </AnimationOnScroll>
      </div>
      <div className="section-bottom">
        {props.data
          ? props.data.map((d, index) => (
              <AnimationOnScroll
                delay={index * 350}
                animateOnce
                animateIn="animate__fadeInUp"
                key={`${d.name}-${index}`}
                className="card"
              >
                <div className="testimonial">
                  <img src={d.img} alt="" />

                  <div className="testimonial-content">
                    <p>"{d.text}"</p>
                    <div className="testimonial-meta"> - {d.name} </div>
                  </div>
                </div>
              </AnimationOnScroll>
            ))
          : "loading"}
      </div>
    </section>
  );
};
