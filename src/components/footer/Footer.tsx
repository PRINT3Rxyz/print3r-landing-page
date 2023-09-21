import FooterContent from "./FooterContent";
import FooterLower from "./FooterLower";

const Footer = () => {
  return (
    <div className="pt-10 px-6 sm:p-24 bg-transparent flex flex-col">
      <FooterContent />
      <FooterLower />
    </div>
  );
};

export default Footer;
