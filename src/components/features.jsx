import { AnimationOnScroll } from "react-animation-on-scroll";

export const Features = (props) => {
  return (
    <section id="features">
      <div className="section-top">
        <h2>Features</h2>

        <div className="section-bottom">
          {props.data
            ? props.data.map((d, index) => (
                <AnimationOnScroll
                  delay={index * 130}
                  animateOnce
                  animateIn="animate__fadeInBottomRight"
                  key={`${d.title}-${index}`}
                >
                  <div className="col-xs-6 col-md-3">
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                </AnimationOnScroll>
              ))
            : "Loading..."}
        </div>
      </div>
    </section>
  );
};
