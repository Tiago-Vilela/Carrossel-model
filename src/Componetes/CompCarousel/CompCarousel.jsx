import { useEffect, useState, useRef } from 'react';
import './CompCarousel.css';

export function CompCarousel() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5173/static/shoes.json')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    <div className="container">
     
      <div className="carousel" ref={carousel}>
      {
        data.map((item) => {
         const {id , name , image} = item
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={item.image} alt={name} />
              </div>
              <div className="info">
                <span className="name">{name}</span>
               
              </div>
            </div>
          );
        })
      }
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right" />
        </button>
      </div>
    </div>
  );
}

