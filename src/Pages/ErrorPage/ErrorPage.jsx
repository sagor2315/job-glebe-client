import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 justify-center items-center h-screen w-full">
        <NavLink to="/">
          <Button className="bg-secondaryColor">Back To Home</Button>
        </NavLink>
        <iframe src="https://lottie.host/embed/9106ea43-c712-4aa4-b1da-a72a9b813e1d/f7BhSH4iL3.json"></iframe>
        <div>
          <h1 className="lg:text-5xl md:text-3xl md:font-bold text-2xl font-semibold lg:font-extrabold text-textPrimary text-center">
            Oops! Error, <br /> Something Went Wrong!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
