import { AnimationOnScroll } from "react-animation-on-scroll";

export const Features = (props) => {
  return (
    <section id="features">
      <div className="section-top">
        <h2>Features</h2>
      </div>
      <div className="section-bottom">
        {props.data
          ? props.data.map((d, index) => (
              <AnimationOnScroll
                delay={index * 130}
                animateOnce
                animateIn="animate__fadeInBottomRight"
                key={`${d.title}-${index}`}
              >
                <div className="card">
                  <div className="card-title">
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                  </div>
                  <p>{d.text}</p>
                </div>
              </AnimationOnScroll>
            ))
          : "Loading..."}
      </div>
    </section>
  );
};
