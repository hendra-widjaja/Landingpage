import React, { useState, useCallback, Fragment } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Portfolio = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const data = [
    { thumb: "img/portfolio/01-small.jpg", title: "Lorem Ipsum1" },
    { thumb: "img/portfolio/02-small.jpg", title: "Lorem Ipsum2" },
    { thumb: "img/portfolio/03-small.jpg", title: "Lorem Ipsum3" },
    { thumb: "img/portfolio/04-small.jpg", title: "Lorem Ipsum4" },
    { thumb: "img/portfolio/05-small.jpg", title: "Lorem Ipsum5" },
    { thumb: "img/portfolio/06-small.jpg", title: "Lorem Ipsum6" },
    { thumb: "img/portfolio/07-small.jpg", title: "Lorem Ipsum7" },
    { thumb: "img/portfolio/08-small.jpg", title: "Lorem Ipsum8" },
    { thumb: "img/portfolio/09-small.jpg", title: "Lorem Ipsum9" },
  ];

  const images = data.map((obj) => obj.thumb.replace("-small", "-large"));

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <section id="portfolio" className="mx-4">
      <div className="section-top">
        <h2>Gallery</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </p>
      </div>

      <div className="section-bottom">
        {data.map(({ title, thumb }, index) => (
          <Fragment key={index} onClick={() => openImageViewer(index)}>
            <div className="portfolio">
              <div className="hover-bg">
                <h4>{title}</h4>
                <img
                  src={thumb}
                  className="img-responsive"
                  alt="Project Title"
                />
              </div>
            </div>
          </Fragment>
        ))}
      </div>

      {isViewerOpen && (
        <ImageViewer
          src={images}
          backgroundStyle={{ zIndex: 99999 }}
          currentIndex={currentImage}
          onClose={closeImageViewer}
        />
      )}
    </section>
  );
};
