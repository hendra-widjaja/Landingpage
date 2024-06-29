import SmoothScroll from "smooth-scroll";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import ScrollOnTop from "./utils/ScrollOnTop";
import "./scss/styles.scss";
import Home from "./pages/home";

import "animate.css/animate.min.css";

const options = {
  position: positions.BOTTOM_LEFT,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <Router>
      <ScrollOnTop>
        <AlertProvider template={AlertTemplate} {...options}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AlertProvider>
      </ScrollOnTop>
    </Router>
  );
};

export default App;
