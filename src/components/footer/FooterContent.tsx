import { BiLogoTelegram } from "react-icons/bi";
import { BsDiscord } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import EmailSubmit from "./EmailSubmit";

const FooterContent = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="flex flex-col">
        <img
          src="src/assets/printer-nav-logo.png"
          className="max-w-[200px] m-0 cursor-pointer"
        ></img>
        <p className="text-base text-white font-poppins my-12">
          Trade Beyond Boundaries.
        </p>
        <div className="flex flex-row mb-6 lg:m-0">
          <a href="#">
            <RiTwitterXFill className="text-white text-4xl mx-2 hover:text-p3-orange" />
          </a>
          <a href="#">
            <BiLogoTelegram className="text-white text-4xl mx-2 hover:text-p3-orange" />
          </a>
          <a href="#">
            <BsDiscord className="text-white text-4xl mx-2 hover:text-p3-orange" />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start">
        <h4 className="text-xl text-white font-nunito font-semibold">
          Quick Links.
        </h4>
        <p className="text-base text-p3-para font-poppins my-6">
          Coming Soon...
        </p>
      </div>
      <div>
        <h4 className="text-xl text-white font-nunito font-semibold">
          Submit for updates.
        </h4>
        <p className="text-p3-para text-base font-poppins my-6">
          Subscribe to get update and notify our exchange and products
        </p>
        <EmailSubmit />
      </div>
    </div>
  );
};

export default FooterContent;
