import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const CustomIndicator = ({ onClickHandler, isActive }) => {
  const classes = `inline-block w-12 h-2 rounded-full mr-2 ${
    isActive ? "bg-black w-8" : "bg-white w-5"
  }`;
  return <button className={classes} onClick={onClickHandler} />;
};

function Slider() {
  return (
    <Carousel
      autoPlay={true}
      interval={5000}
      infiniteLoop={true}
      emulateTouch={true}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      className="cursor-pointer"
      renderIndicator={(onClickHandler, isSelected) => (
        <CustomIndicator
          onClickHandler={onClickHandler}
          isActive={isSelected}
        />
      )}
    >
      <div className="carousel-item">
        <div className="carousel-item-content px-5">
          <Image
            src="/banner-1.jpg"
            className="object-cover rounded-md"
            width={1200}
            height={1200}
            alt="Banner"
            priority={true}
          />
        </div>
      </div>
      <div className="carousel-item">
        <div className="carousel-item-content px-5">
          <Image
            src="/banner-2.jpg"
            className="object-cover rounded-md"
            width={1200}
            height={1200}
            alt="Banner"
            priority={true}
          />
        </div>
      </div>
      <div className="carousel-item">
        <div className="carousel-item-content px-5">
          <Image
            src="/banner-3.jpg"
            className="object-cover rounded-md"
            width={1200}
            height={1200}
            alt="Banner"
            priority={true}
          />
        </div>
      </div>
    </Carousel>
  );
}
export default Slider;
