import React, { useEffect, useState } from "react";

import JsonData from "../../data/data.json";
import { Navbar } from "../../components/navbar";
import { Header } from "../../components/header";
import { Features } from "../../components/features";
import { About } from "../../components/about";
import { Services } from "../../components/services";
import { Portfolio } from "../../components/portfolio";
import { Testimonials } from "../../components/testimonials";
import { Contact } from "../../components/contact";
import { Footer } from "../../components/footer";

function Home() {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div className="container-main">
      <Navbar />
      <Header data={landingPageData.Header} />
      <div className="divider" />

      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <div className="divider" />

      <Services data={landingPageData.Services} />
      <div className="divider" />

      <Portfolio />
      <div className="divider" />

      <Testimonials data={landingPageData.Testimonials} />
      <div className="divider" />

      <Contact data={landingPageData.Contact} />
      <Footer />
    </div>
  );
}

export default Home;
