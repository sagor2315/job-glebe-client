import React, { useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
  Avatar,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../../Provider/AuthProvider";
import logo from "../../../assets/jobGlebe2.png";
import useAuth from "../../../Hooks/Auth/useAuth";

export function StickyNavbar() {
  const { user, LogOutUser } = useAuth();
  const [openNav, setOpenNav] = React.useState(false);
  const [enter, setEnter] = useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleHover = () => {
    const iconText = document.querySelector(".icon-text");
    iconText.style.display = "";
    setEnter(true);
  };

  // console.log(enter);

  const handleMouseLeave = () => {
    const iconText = document.querySelector(".icon-text");
    iconText.style.display = "none";
    setEnter(false);
  };

  const handleLogout = () => {
    LogOutUser()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col items-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/"
          className="flex items-center font-fontLat text-textPrimary font-extrabold text-lg"
        >
          Home
        </NavLink>
      </Typography>

      <Typography as="li" variant="small" color="blue-gray" className="p-1 ">
        <NavLink
          to="/alljobs"
          className="flex items-center font-fontLat text-textPrimary font-extrabold text-lg"
        >
          All Jobs
        </NavLink>
      </Typography>

      {user ? (
        <>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <NavLink
              to="/appliedjobs"
              className="flex items-center font-fontLat text-textPrimary font-extrabold text-lg"
            >
              Applied Jobs
            </NavLink>
          </Typography>

          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <NavLink
              to="/addajob"
              className="flex items-center font-fontLat text-textPrimary font-extrabold text-lg"
            >
              Add A Job
            </NavLink>
          </Typography>

          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <NavLink
              to="/myjobs"
              className="flex items-center font-fontLat text-textPrimary font-extrabold text-lg"
            >
              My Jobs
            </NavLink>
          </Typography>
        </>
      ) : (
        ""
      )}

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-textPrimary font-semibold text-base"
      >
        <NavLink
          to="/blog"
          className="flex items-center font-fontLat text-textPrimary font-extrabold text-lg"
        >
          Blog
        </NavLink>
      </Typography>

      {user ? (
        <div className="flex items-center justify-center gap-x-3">
          <div className="block relative">
            <Avatar
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
              size="md"
              variant="circular"
              className="border border-gray-900 p-0.5 cursor-pointer"
              referrerPolicy="no-referrer"
              src={`${
                user?.photoURL
                  ? user?.photoURL
                  : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              }`}
            ></Avatar>
            <div
              className={` ${
                enter ? "" : "hidden"
              } icon-text absolute right-0 -bottom-7 w-52 flex justify-center bg-secondaryColor py-1 pl-2 text-white`}
            >
              <h1>{enter ? user?.displayName : "Name loading"}</h1>
            </div>
          </div>

          <Link>
            <Button
              onClick={handleLogout}
              variant="filled"
              size="lg"
              className="lg:inline-block bg-secondaryColor py-3 rounded-md capitalize font-fontLat font-bold text-lg"
            >
              <span>Logout</span>
            </Button>
          </Link>
        </div>
      ) : (
        <Link to="/login">
          <Button
            variant="filled"
            size="lg"
            className="lg:inline-block bg-secondaryColor py-3 rounded-md capitalize font-fontLat font-bold text-lg"
          >
            <span>Login</span>
          </Button>
        </Link>
      )}
    </ul>
  );

  //   Home, AllJobs, Applied Jobs, Add A Job, My Jobs, Blogs, and User Profile.

  return (
    <div className=" ">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 ">
        <div className="flex items-center justify-between text-blue-gray-900 ">
          <NavLink to="/">
            <Typography className="mr-4 cursor-pointer">
              {/* JobGlebe */} <img className="w-full" src={logo} alt="" />
            </Typography>
          </NavLink>
          <div className="flex items-center  gap-4 ">
            <div className="mr-4 hidden  lg:block">{navList}</div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </Navbar>
    </div>
  );
}
