import { AnimationOnScroll } from "react-animation-on-scroll";

export const About = (props) => {
  return (
    <section id="about">
      <div className="section-top">
        <div className="section-left">
          <AnimationOnScroll
            delay={200}
            animateOnce
            animateIn="animate__rotateInDownLeft"
          >
            <img src="./img/about.jpg" className="img-responsive" alt="" />
          </AnimationOnScroll>
        </div>

        <div className="section-right">
          <div className="about-text">
            <div className="section-top">
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            </div>

            <div className="section-bottom">
              <h3>Why Choose Us?</h3>
              <div className="container-list">
                <ul className="list">
                  {props.data
                    ? props.data.Why.map((d, i) => (
                        <li className="list-item" key={`${d}-${i}`}>
                          <AnimationOnScroll
                            delay={i * 250}
                            animateOnce
                            animateIn="animate__fadeInUp"
                          >
                            {d}
                          </AnimationOnScroll>
                        </li>
                      ))
                    : "loading"}
                </ul>

                <ul className="list">
                  {props.data
                    ? props.data.Why2.map((d, i) => (
                        <li className="list-item" key={`${d}-${i}`}>
                          <AnimationOnScroll
                            delay={i * 500}
                            animateOnce
                            animateIn="animate__fadeInUp"
                          >
                            {d}
                          </AnimationOnScroll>
                        </li>
                      ))
                    : "loading"}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
