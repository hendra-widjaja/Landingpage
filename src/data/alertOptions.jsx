import { transitions, positions } from "react-alert";

const optionsAlert = {
  position: positions.BOTTOM_LEFT,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};

const AlertTemplate = ({ style, options = optionsAlert, message, close }) => (
  <div style={style}>
    {options.type === "info" && "!"}
    {options.type === "success" && ":)"}
    {options.type === "error" && ":("}
    {message}
    <button onClick={close}>X</button>
  </div>
);

export { AlertTemplate };
