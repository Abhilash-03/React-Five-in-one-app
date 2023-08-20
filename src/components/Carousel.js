import { useState } from "react";

function Carousel({title}) {
  const img = [
    "https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg",

    "https://img.freepik.com/free-photo/peacock-with-colorful-tail-is-shown-with-brown-background_1340-24437.jpg",

    "https://img.freepik.com/free-photo/tranquil-summer-pond-reflects-lush-green-landscape-beauty-generative-ai_188544-12646.jpg",

    "https://img.freepik.com/free-photo/beautiful-boat-generative-ai_191095-512.jpg",
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex(index === img.length - 1 ? 0 : index + 1);
  };

  const handlePrev = () => {
    setIndex(index === 0 ? img.length - 1 : index - 1);
  };


  return (
    <>
        <h1 className="heading">{title}</h1>
      <div className="slider">
    
        <div className="carousel">
          {img.map(
            (image, indx) =>
             index === indx && (
                <div className="slide" key={indx}>
                  <img src={image} alt={`img-${index + 1}`} />
                </div>
              )
          )}
        </div>
        <div className="btns">
        <button
          type="button"
          id="prev"
          className="previous"
          onClick={handlePrev}
        >
          Previous
        </button>
        <button
          type="button"
          id="next"
          className="nextImg"
          onClick={handleNext}
        >
          Next
        </button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
