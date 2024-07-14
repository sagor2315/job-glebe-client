// import { Button } from "@material-tailwind/react";
import bannerImg1 from "../../../assets/card.png";
import bannerImg2 from "../../../assets/card-s1.png";
import bannerImg3 from "../../../assets/card-s2.png";
import bannerImg4 from "../../../assets/color-dotts.png";

const Banner = () => {
  return (
    <div className="flex justify-between relative">
      <div className="w- lg:h-[550px] md:h-[400px] h-[250px] flex flex-col w-1/4">
        <img className="w-full h-[250px]" src={bannerImg1} alt="" />
        <img className="w-full h-[250px]" src={bannerImg2} alt="" />
      </div>
      <div className="w- lg:h-[550px] md:h-[400px] h-[250px] flex flex-col w-1/4">
        <img className="w-full h-[250px]" src={bannerImg3} alt="" />
        <img className="w-full h-[250px]" src={bannerImg4} alt="" />
      </div>
      {/* <div className="absolute inset-x-1/2 inset-y-1/2 border-2 border-black w-1/2"> */}
      <div className="absolute inset-0 flex flex-col md:gap-5 gap-2 justify-center items-center lg:-top-32 md:-top-20 md:w-3/4 mx-auto">
        <div>
          <h1 className="lg:text-5xl md:text-4xl text-[22px] font-extrabold">
            Your{" "}
            <span className="text-secondaryColor border-b-4 border-b-secondaryColor">
              Dream Job
            </span>{" "}
            in one place
          </h1>
          <h1 className="text-center lg:text-2xl md:text-lg text-sm md:font-bold pt-2">
            Find jobs that match your interests with us.
          </h1>
        </div>
        <div className="flex items-center justify-center relative lg:w-2/3 md:3/4 w-3/4">
          <div className=" w-full">
            <input
              type="text"
              name="text"
              placeholder="Search here"
              className="md:py-6 w-full pl-5 py-3 outline-none rounded-xl rounded-e-3xl border-2 border-secondaryColor"
            />
          </div>
          <div className="absolute  right-0">
            <button className="md:py-[25px] rounded-3xl lg:px-16 md:px-10 py-[15px] px-5 text-white bg-secondaryColor capitalize md:text-base md:font-semibold text-sm">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
