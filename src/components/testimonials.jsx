import { AnimationOnScroll } from "react-animation-on-scroll";

export const Testimonials = (props) => {
  return (
    <section id="testimonials" className="mx-4">
      <div className="container">
        <div className="section-title text-center">
          <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
            <h2>What our clients say</h2>
          </AnimationOnScroll>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, index) => (
                <AnimationOnScroll
                  delay={index * 350}
                  animateOnce
                  animateIn="animate__fadeInUp"
                  key={`${d.name}-${index}`}
                >
                  <div className="col-md-4">
                    <div className="testimonial">
                      <div className="testimonial-image">
                        <img src={d.img} alt="" />
                      </div>
                      <div className="testimonial-content">
                        <p>"{d.text}"</p>
                        <div className="testimonial-meta"> - {d.name} </div>
                      </div>
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
