import Carousel from "react-bootstrap/Carousel";
export const CarouselPrincipal = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://macmagazine.com.br/wp-content/uploads/2018/10/26-banner-iphone-xr.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://macmagazine.com.br/wp-content/uploads/2018/10/26-banner-iphone-xr.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://macmagazine.com.br/wp-content/uploads/2018/10/26-banner-iphone-xr.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};
