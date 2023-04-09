import { useEffect, useState } from "react";
import "../styles/carusel.css";

function Carusel({ images }) {
  const [count, setCount] = useState(0);
  const [autoPlay, setAutoPlay] = useState(null);
  let timeOut = null;
  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
  });

  const slideRight = () => {
    setCount(count === images.length - 1 ? 0 : count + 1);
  };

  const slideLeft = () => {
    setCount(count === 0 ? images.length - 1 : count - 1);
  };
  return (
    <div
      className="carusel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeOut(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carusel__wrap">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index == count
                  ? "carusel__card carusel__card-active"
                  : "carusel__card"
              }
            >
              <img className="card__image" src={image.image} alt="..." />
              <div className="card__overlay">
                <h2 className="card_title">{image.title}</h2>
              </div>
            </div>
          );
        })}
        <div className="carusel__arrow-right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carusel__arrow-left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carusel__pagination">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index == count
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCount(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carusel;
