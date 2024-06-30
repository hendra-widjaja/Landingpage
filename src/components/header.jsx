import ParticlesBg from "particles-bg";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <ParticlesBg
          type="thick"
          bg={{
            color: ["random", "#ff0000"],
            height: "100vh",
            maxWidth: "100%",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 0,
          }}
        />

        <div className="overlay">
          <div className="intro-text">
            <h1>{props.data ? props.data.title : "Loading"}</h1>
            <p>{props.data ? props.data.paragraph : "Loading"}</p>
            <a href="/#features" className="btn uppercase">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
