import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./CarouselImage";

function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="w-50" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <CarouselImage src="./images/1.jpg" text="First slide" />
        <Carousel.Caption style={{}}>
          <h3>Claim Management</h3>
          <p>File claims easily and get resolution quickly.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage src="./images/2.jpg" text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
