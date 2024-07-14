import { useState, useEffect } from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? "visible" : "invisible"
      } fixed bottom-4 right-4 bg-secondaryColor text-white p-2 rounded cursor-pointer transition-opacity duration-300  z-40`}
    >
      <FaArrowCircleDown className="text-4xl hover:rotate-180 hover:transition-transform hover:duration-1000" />
    </button>
  );
};

export default ScrollToTopButton;
