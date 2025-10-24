import MulSlides from "./multipleSlides/page";
import Slides from "./singleSlider/page";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <MulSlides />
      <Slides />
    </div>
  );
}
