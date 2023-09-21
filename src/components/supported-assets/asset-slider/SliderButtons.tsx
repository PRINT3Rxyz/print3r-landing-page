import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

interface Props {
  scroll: (scrollOffset: number) => void;
}

const SliderButtons: React.FC<Props> = ({ scroll }) => {
  return (
    <div className="flex flex-row justify-center">
      <BsFillArrowLeftCircleFill
        className="cursor-pointer text-p3-orange mr-4 text-3xl"
        onClick={() => scroll(-200)}
      />
      <BsFillArrowRightCircleFill
        className="cursor-pointer text-p3-orange ml-4 text-3xl"
        onClick={() => scroll(200)}
      />
    </div>
  );
};

export default SliderButtons;
