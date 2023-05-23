import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const CustomIndicator = ({ onClickHandler, isActive }) => {
  const classes = `inline-block w-12 h-2 rounded-full mr-2 ${
    isActive ? "bg-black w-8" : "bg-white w-5"
  }`;
  return <button className={classes} onClick={onClickHandler} />;
};

function Slider({ sliders }) {
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
      {sliders.map((slider) => (
        <div className="carousel-item" key={slider._id}>
          <div className="carousel-item-content px-5">
            <Image
              src={slider.image}
              alt={slider.title}
              title={slider.title}
              width={1200}
              height={1200}
              priority={true}
              className="object-cover rounded-md"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
}
export default Slider;
