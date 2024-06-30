import React, { useEffect, useState } from "react";
import { About } from "../../components/about";
import { Contact } from "../../components/contact";
import { Features } from "../../components/features";
import { Footer } from "../../components/footer";
import { Portfolio } from "../../components/portfolio";
import { Header } from "../../components/header";
import { Navbar } from "../../components/navbar";
import { Services } from "../../components/services";
import { Testimonials } from "../../components/testimonials";
import JsonData from "../../data/data.json";

function Home() {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div className="container-main">
      <Navbar />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Portfolio />
      <Testimonials data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} />
      <Footer />
    </div>
  );
}

export default Home;
