import { PiDesktopTowerBold } from "react-icons/pi";
import { FaPeopleGroup, FaPenToSquare } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdManageHistory, MdOutlineAutoGraph } from "react-icons/md";
import { LuCalendarClock } from "react-icons/lu";

const RechargeYourCareer = () => {
  return (
    <div className="mx-6 pt-7">
      <div className="text-center rounded-md mb-7">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold bg-orange-50 py-2 ">
          Recharge Your Career
        </h1>
      </div>

      <div className="flex md:flex-row flex-col gap-5 md:justify-evenly lg:justify-between">
        <div className="bg-orange-50 w-full flex flex-col gap-3 pl-5 pb-5">
          <h1 className="text-xl font-bold py-4">Evening Training</h1>
          <div className="flex gap-5 items-center w-full">
            <div className="px-3 py-2 bg-secondaryColor">
              <PiDesktopTowerBold className="text-4xl text-white" />
            </div>
            <div>
              <h1>Become A Pro In Microsoft Office</h1>
              <h1>02 - 27 Feb 2024</h1>
            </div>
          </div>
          <div className="flex gap-5 items-center  w-full">
            <div className="px-3 py-2 bg-secondaryColor">
              <FaPenToSquare className="text-4xl text-white" />
            </div>
            <div>
              <h1>Mastering Emotional Intelligence</h1>
              <h1>01 - 29 March 2024</h1>
            </div>
          </div>
          <div className="flex gap-5 items-center  w-full">
            <div className="px-3 py-2 bg-secondaryColor">
              <SlCalender className="text-4xl text-white" />
            </div>
            <div>
              <h1>Everything For Import - Export</h1>
              <h1>02 - 20 April 2024</h1>
            </div>
          </div>
          <div className="flex gap-5 items-center  w-full">
            <div className="px-3 py-2 bg-secondaryColor">
              <MdManageHistory className="text-4xl text-white" />
            </div>
            <div>
              <h1>Mastering In Sales Management</h1>
              <h1>02 - 25 Sep 2024</h1>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 w-full flex flex-col gap-3 pl-5 pb-5">
          <h1 className="text-xl font-bold py-4">Day Training</h1>
          <div className="flex gap-5 items-center">
            <div className="px-3 py-2 bg-secondaryColor">
              <FaPeopleGroup className="text-4xl text-white" />
            </div>
            <div>
              <h1>Training on Facilitation Skills</h1>
              <h1>06 Jep - 20 Feb 2024</h1>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="px-3 py-2 bg-secondaryColor">
              <IoDiamond className="text-4xl text-white" />
            </div>
            <div>
              <h1>Effective English Skill</h1>
              <h1>26 Jan - 10 March 2024</h1>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="px-3 py-2 bg-secondaryColor">
              <MdOutlineAutoGraph className="text-4xl text-white" />
            </div>
            <div>
              <h1>21st Century HR Management</h1>
              <h1>16 Feb - 10 April 2024</h1>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="px-3 py-2 bg-secondaryColor">
              <LuCalendarClock className="text-4xl text-white" />
            </div>
            <div>
              <h1>Negotiation Excellence for Sales</h1>
              <h1>06 March - 10 May 2024</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RechargeYourCareer;
