const FooterLower = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between my-12 border-t-2 border-p3-orange">
      <div className="flex flex-row justify-between min-w-[30%] mt-4">
        <a href="#">
          <p className="text-base font-sans text-p3-para opacity-40 mr-4">
            PRINT3R ©. All rights reserved.
          </p>
        </a>
        <a href="#">
          <p className="text-base font-sans text-p3-para opacity-40 ml-4">
            Powered by BASE
          </p>
        </a>
      </div>
      <div className="flex flex-row justify-between items-center mt-4">
        <a href="#">
          <p className="text-base font-sans text-p3-para opacity-40">
            Terms of Service
          </p>
        </a>

        <div className="w-px bg-divider h-6 mx-6"></div>
        <a href="#">
          <p className="text-base font-sans text-p3-para opacity-40">
            Privacy Policy
          </p>
        </a>
      </div>
    </div>
  );
};

export default FooterLower;
