import ParticlesBg from "particles-bg";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <ParticlesBg
          type="thick"
          bg={{
            zIndex: 0,
            position: "absolute",
            top: 0,
            height: "100vh",
            color: ["random", "#ff0000"],
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
