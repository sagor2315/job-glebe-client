import { Button, Spinner } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import useAllJobs from "../../../Hooks/useAllJobs";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
// import { AuthContext } from "../../../Provider/AuthProvider";
// import useApplyJobs from "../../../Hooks/useApplyJobs";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import "./JobsCategorytabs.css";

const JobsCategoryTabs = () => {
  const { user } = useContext(AuthContext);
  const [onSiteJobAll, setOnSiteJob] = useState();
  const [remoteJobsAll, setRemoteJobs] = useState();
  const [hybridJobAll, setHybridJob] = useState();
  const [partTimeJobAll, setPartTimeJob] = useState();
  // const [applicantNew, setApplicantNew] = useState();

  const allJobs = useAllJobs();
  console.log(allJobs);

  useEffect(() => {
    const onSiteJobs = allJobs?.filter(
      (data) => data.jobCat.toLowerCase() === "On Site Jobs"?.toLowerCase()
    );
    const remoteJobs = allJobs?.filter(
      (data) => data.jobCat.toLowerCase() === "Remote Jobs"?.toLowerCase()
    );
    const hybridJob = allJobs?.filter(
      (data) => data.jobCat.toLowerCase() === "Hybrid Jobs"?.toLowerCase()
    );
    const partTimeJob = allJobs?.filter(
      (data) => data.jobCat.toLowerCase() === "Part Time Jobs"?.toLowerCase()
    );
    setOnSiteJob(onSiteJobs);
    setRemoteJobs(remoteJobs);
    setHybridJob(hybridJob);
    setPartTimeJob(partTimeJob);
  }, [allJobs]);

  // console.log(applicantNew);

  const tabs = [
    { tabName: "All Jobs" },
    { tabName: "On Site Jobs" },
    { tabName: "Remote Jobs" },
    { tabName: "Hybrid Jobs" },
    { tabName: "Part Time Jobs" },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const handleTabs = (id) => {
    setActiveTab(id);
  };

  const handleViewDetails = () => {
    user
      ? ""
      : Swal.fire({
          title: "Are you logged in?",
          text: "Without login, you can not visit the single job details page.",
          icon: "question",
        });
  };

  // console.log(onSiteJobAll);
  // console.log(remoteJobsAll);

  if (!allJobs) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <Spinner className="h-16 w-16  text-gray-900/50" />
      </div>
    );
  }

  return (
    <div className="pb-0 max-w-screen-2xl mx-auto">
      <div className="flex lg:gap-5 md:gap-4 border-2 border-secondaryColor rounded-xl md:flex-nowrap flex-wrap w-10/12 mx-auto">
        {tabs.map((tab, id) => (
          <div
            key={id}
            className="md:w-full relative"
            // style={{ transition: "transform 0.5s ease-in-out" }}
          >
            <div
              className={`text-center cursor-pointer py-5 md:px-0 px-3 lg:text-xl md:text-base text-textPrimary font-bold ${
                activeTab === id
                  ? " duration-500  text-white lg:text-xl md:text-base font-bold translate-x-0 bg-secondaryColor rounded-lg"
                  : "lg:-translate-x-5 md:-translate-x-3"
              }`}
              onClick={() => handleTabs(id)}
            >
              {tab.tabName}
            </div>
          </div>
        ))}
      </div>

      <div className={`${activeTab === 0 ? "" : "hidden"}`}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 p-8">
          {allJobs?.map((job, id) => (
            <div
              key={id}
              className={`group rounded-md px-5 py-5 bg-orange-50 hover:text-gray-900 
              hover:bg-gray-100 hover:rounded-none hover:duration-500 hover:shadow hover:shadow-gray-400 `}
            >
              <div className="">
                <div className="flex md:flex-row flex-col justify-between pb-3">
                  <h1 className="text-base font-medium rounded-s-md ">
                    <span className="font-semibold ">Posted By:</span>{" "}
                    {job.userNm}
                  </h1>
                  <h1 className="font-semibold ">
                    Total Applied: {job?.applicantNumber}
                  </h1>
                </div>
                <h1 className="lg:text-[22px] text-lg font-semibold ">
                  {job.jobTitle}
                </h1>
                <div className="text-base">
                  <h1 className="font-semibold font-fontLat">
                    Posting Date:{" "}
                    {job.jobPostingDate?.split(":")[0].slice(0, -3)}
                  </h1>
                  <h1 className="font-semibold font-fontLat">
                    Dateline:{" "}
                    {job.applicationDateLine?.split(":")[0].slice(0, -3)}
                  </h1>
                  <h1 className="font-semibold font-fontLat">
                    Salary: {job.salaryRange} tk
                  </h1>
                </div>

                <div className="flex-grow pt-3">
                  <NavLink to={`/viewdetails/${job._id}`}>
                    <Button
                      onClick={handleViewDetails}
                      className="buttonBig capitalize text-lg py-2 rounded-s-md rounded-none bg-secondaryColor group-hover:w-full ease-in-out group-hover:duration-500 group-hover:rounded-e-md group-hover:bg-white group-hover:text-black text-white group-hover:shadow"
                    >
                      Details
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${activeTab === 1 ? "" : "hidden"}`}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 p-8">
          {onSiteJobAll?.map((job, id) => (
            <div
              key={id}
              className={`group rounded-md px-5 py-5 bg-orange-50 hover:text-gray-900 
              hover:bg-gray-100 hover:rounded-none hover:duration-500 hover:shadow hover:shadow-gray-400
              `}
            >
              <div className="">
                <div className="flex md:flex-row flex-col justify-between pb-3">
                  <h1 className="text-base font-medium rounded-s-md ">
                    <span className="font-semibold ">Posted By:</span>{" "}
                    {job.userNm}
                  </h1>
                  <h1 className="font-semibold ">
                    Total Applied: {job?.applicantNumber}
                  </h1>
                </div>
                <h1 className="text-[22px] font-semibold ">{job.jobTitle}</h1>
                <div className="text-lg ">
                  <h1 className="font-semibold font-fontLat">
                    Posting Date:{" "}
                    {job.jobPostingDate?.split(":")[0].slice(0, -3)}
                  </h1>
                  <h1 className="font-semibold font-fontLat">
                    Dateline:{" "}
                    {job.applicationDateLine?.split(":")[0].slice(0, -3)}
                  </h1>
                  <h1 className="font-semibold font-fontLat">
                    Salary: {job.salaryRange} tk
                  </h1>
                </div>

                <div className="flex-grow pt-3">
                  <NavLink to={`/viewdetails/${job._id}`}>
                    <Button
                      onClick={handleViewDetails}
                      className="buttonBig capitalize text-lg py-2 rounded-s-md rounded-none group-hover:w-full group-hover:duration-500 group-hover:rounded-e-md group-hover:bg-white group-hover:text-black bg-secondaryColor text-white group-hover:shadow"
                    >
                      Details
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${activeTab === 2 ? "" : "hidden"} `}>
        <div className="grid md:grid-cols-2  grid-cols-1 gap-5 p-8">
          {remoteJobsAll?.map((job, id) => (
            <div
              key={id}
              className={`group rounded-md px-5 py-5 bg-orange-50 hover:text-gray-900 
              hover:bg-gray-100 hover:rounded-none hover:duration-500 hover:shadow hover:shadow-gray-400
            `}
            >
              <div className="">
                <div className="flex md:flex-row flex-col justify-between pb-3">
                  <h1 className="text-base font-medium rounded-s-md ">
                    <span className="font-semibold ">Posted By:</span>{" "}
                    {job.userNm}
                  </h1>
                  <h1 className="font-semibold ">
                    Total Applied: {job?.applicantNumber}
                  </h1>
                </div>
                <h1 className="text-[22px] font-semibold ">{job.jobTitle}</h1>
                <div className="text-lg ">
                  <h1 className="font-semibold font-fontLat">
                    Posting Date:{" "}
                    {job.jobPostingDate?.split(":")[0].slice(0, -3)}
                  </h1>
                  <h1 className="font-semibold font-fontLat">
                    Dateline:{" "}
                    {job.applicationDateLine?.split(":")[0].slice(0, -3)}
                  </h1>
                  <h1 className="font-semibold font-fontLat">
                    Salary: {job.salaryRange} tk
                  </h1>
                </div>

                <div className="flex-grow pt-3">
                  <NavLink to={`/viewdetails/${job._id}`}>
                    <Button
                      onClick={handleViewDetails}
                      className="buttonBig capitalize text-lg py-2 rounded-s-md rounded-none group-hover:w-full group-hover:duration-500 group-hover:rounded-e-md group-hover:bg-white group-hover:text-black bg-secondaryColor text-white group-hover:shadow"
                    >
                      Details
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${activeTab === 3 ? "" : "hidden"} `}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 p-8">
          {hybridJobAll?.map((job, id) => (
            <div
              key={id}
              className={`group rounded-md px-5 py-5 bg-orange-50 hover:text-gray-900 
              hover:bg-gray-100 hover:rounded-none hover:duration-500 hover:shadow hover:shadow-gray-400
            `}
            >
              <div className="">
                <div className="flex md:flex-row flex-col justify-between pb-3">
                  <h1 className="text-base font-medium rounded-s-md ">
                    <span className="font-semibold ">Posted By:</span>{" "}
                    {job.userNm}
                  </h1>
                  <h1 className="font-semibold ">
                    Total Applied: {job?.applicantNumber}
                  </h1>
                </div>
                <h1 className="text-[22px] font-semibold ">{job.jobTitle}</h1>
                <div className="text-lg ">
                  <h1 className="font-semibold font-fontLat">
                    Posting Date:{" "}
                    {job.jobPostingDate?.split(":")[0].slice(0, -3)}
                  </h1>
                  <h1 className="font-semibold font-fontLat">
                    Dateline:{" "}
                    {job.applicationDateLine?.split(":")[0].slice(0, -3)}
                  </h1>
                  <h1 className="font-semibold font-fontLat">
                    Salary: {job.salaryRange} tk
                  </h1>
                </div>

                <div className="flex-grow pt-3">
                  <NavLink to={`/viewdetails/${job._id}`}>
                    <Button
                      onClick={handleViewDetails}
                      className="buttonBig capitalize text-lg py-2 rounded-s-md rounded-none group-hover:w-full group-hover:duration-500 group-hover:rounded-e-md group-hover:bg-white group-hover:text-black bg-secondaryColor text-white group-hover:shadow"
                    >
                      Details
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${activeTab === 4 ? "" : "hidden"} `}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 p-10">
          {partTimeJobAll?.map((job, id) => (
            <div
              key={id}
              className={`group rounded-md px-5 py-5 bg-orange-50 hover:text-gray-900 
              hover:bg-gray-100 hover:rounded-none hover:duration-500 hover:shadow hover:shadow-gray-400
            `}
            >
              <div className="">
                <div className="flex md:flex-row flex-col justify-between pb-3">
                  <h1 className="text-base font-medium rounded-s-md ">
                    <span className="font-semibold ">Posted By:</span>{" "}
                    {job.userNm}
                  </h1>
                  <h1 className="font-semibold ">
                    Total Applied: {job?.applicantNumber}
                  </h1>
                </div>
                <h1 className="text-[22px] font-semibold ">{job.jobTitle}</h1>
                <div className="text-lg ">
                  <h1>
                    Job Posting Date:{" "}
                    {job.jobPostingDate?.split(":")[0].slice(0, -3)}
                  </h1>
                  <h1>
                    Dateline:{" "}
                    {job.applicationDateLine?.split(":")[0].slice(0, -3)}
                  </h1>
                  <h1>Salary: {job.salaryRange} tk</h1>
                </div>

                <div className="flex-grow pt-3">
                  <NavLink to={`/viewdetails/${job._id}`}>
                    <Button
                      onClick={handleViewDetails}
                      className="buttonBig capitalize text-lg py-2 rounded-s-md rounded-none group-hover:w-full group-hover:duration-500 group-hover:rounded-e-md group-hover:bg-white group-hover:text-black bg-secondaryColor text-white group-hover:shadow"
                    >
                      Details
                    </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

JobsCategoryTabs.propTypes = {
  allAddAJobData: PropTypes.array,
};

export default JobsCategoryTabs;
