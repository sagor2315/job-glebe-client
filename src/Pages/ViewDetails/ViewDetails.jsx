import { useLoaderData } from "react-router-dom";
import ApplyModal from "../../Components/ApplyModal/ApplyModal";
import useApplyJobs from "../../Hooks/useApplyJobs";
import { useEffect, useState } from "react";
import ScrollToTopButton from "../HomePage/ScrollToTopButton/ScrollToTopButton";
import { Helmet } from "react-helmet-async";
import { usePDF } from "react-to-pdf";
import { Button } from "@material-tailwind/react";

const ViewDetails = () => {
  const [applicantNum, setApplicantNum] = useState();
  const singleJobData = useLoaderData();
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const {
    _id,
    email,
    jobBanner,
    companyLogo,
    jobTitle,
    jobCat,
    userNm,
    applicantNumber,
    salaryRange,
    jobPostingDate,
    applicationDateLine,
    jobResponsibilities1,
    jobResponsibilities2,
    jobResponsibilities3,
    jobResponsibilities4,
    eduRequirements1,
    eduRequirements2,
    expReq1,
    expReq2,
    expReq3,
    addReq1,
    addReq2,
    addReq3,
    jobLocation,
    OtherBenefits1,
    OtherBenefits2,
    OtherBenefits3,
    OtherBenefits4,
  } = singleJobData;
  const applyJObsData = useApplyJobs();

  useEffect(() => {
    const specificJob = applyJObsData?.find((data) => data._id === _id);
    setApplicantNum(specificJob);
  }, [applyJObsData, _id]);

  console.log(applicantNum?.applicantNumber);
  return (
    <div className="max-w-screen-2xl mx-auto lg:my-5 md:my-5 my-3">
      <Helmet>
        <title>View Details - {jobTitle}</title>
      </Helmet>
      <div className="flex justify-center mb-5">
        <Button
          className="rounded bg-transparent text-lg  capitalize text-textPrimary border-2 border-secondaryColor"
          onClick={() => toPDF()}
        >
          Download As PDF
        </Button>
      </div>
      <div className="" ref={targetRef}>
        <div className="w-full px-2">
          <img className="w-full h-1/2" src={jobBanner} alt="" />
        </div>

        <div className="">
          <div className="md:grid md:grid-cols-12 md:gap-10 pt-5 md:flex-none flex flex-col-reverse gap-3">
            <div className="md:col-span-9">
              <h1 className=" lg:text-4xl md:text-3xl text-xl font-bold md:text-start pl-2">
                {jobTitle}
              </h1>
              <div className="pt-3 pl-2 md:block hidden">
                <h1 className="text-lg font-semibold">Posted By: {userNm}</h1>
                <h1 className="text-lg font-semibold">
                  Application DeadLine:{" "}
                  {applicationDateLine?.split(":")[0].slice(0, -3)}
                </h1>
                <h1 className="text-lg font-semibold">
                  Job Posting Date: {jobPostingDate?.split(":")[0].slice(0, -3)}
                </h1>
                <h1 className="text-lg font-semibold">
                  Total Applied:{" "}
                  {applicantNum?.applicantNumber
                    ? applicantNum?.applicantNumber
                    : applicantNumber}
                </h1>
              </div>
            </div>
            <div className="md:col-span-3 md:flex-none flex md:justify-end justify-center md:pt-5 pt-3 pr-2">
              <img
                className="w-40 h-40 rounded-md border-2 p-1 border-gray-600"
                src={companyLogo}
                alt=""
              />
            </div>
          </div>

          <div className="md:hidden block pt-3 pl-2">
            <h1 className="text-base font-semibold">Posted By: {userNm}</h1>
            <h1 className="text-base font-semibold">
              Application DeadLine: {applicationDateLine}
            </h1>
            <h1 className="text-base font-semibold">
              Job Posting Date: {jobPostingDate}
            </h1>
            <h1 className="text-base font-semibold">
              Total Applied: {applicantNumber}
            </h1>
          </div>
        </div>

        <div className="px-2 pt-10">
          <h1 className="md:text-2xl text-xl font-bold ">
            Job Responsibilities
          </h1>
          <ul className="pt-3 flex flex-col gap-2">
            <li className="list-disc ml-5">{jobResponsibilities1}</li>
            <li className="list-disc ml-5">{jobResponsibilities2}</li>
            <li className="list-disc ml-5">{jobResponsibilities3}</li>
            <li className="list-disc ml-5">{jobResponsibilities4}</li>
          </ul>
        </div>

        <div className="px-2 pt-5">
          <h1 className="md:text-2xl text-xl font-bold">Job Category</h1>
          <h1 className="ml-5 capitalize">{jobCat}</h1>
        </div>

        <div className="px-2 pt-5">
          <h1 className="md:text-2xl text-xl font-bold">
            Educational Requirements
          </h1>
          <ul className="pt-3 flex flex-col gap-2">
            <li className="list-disc ml-5">{eduRequirements1}</li>
            <li className="list-disc ml-5">{eduRequirements2}</li>
          </ul>
        </div>

        <div className="px-2 pt-5">
          <h1 className="md:text-2xl text-xl font-bold">
            Experience Requirements
          </h1>
          <ul className="pt-3 flex flex-col gap-2">
            <li className="list-disc ml-5">{expReq1}</li>
            <li className="list-disc ml-5">{expReq2}</li>
            <li className="list-disc ml-5">{expReq3}</li>
          </ul>
        </div>

        <div className="px-2 pt-5">
          <h1 className="md:text-2xl text-xl font-bold">
            Additional Requirements
          </h1>
          <ul className="pt-3 flex flex-col gap-2">
            <li className="list-disc ml-5">{addReq1}</li>
            <li className="list-disc ml-5">{addReq2}</li>
            <li className="list-disc ml-5">{addReq3}</li>
          </ul>
        </div>

        <div className="px-2 pt-5">
          <h1 className="md:text-2xl text-xl font-bold">Job Location</h1>
          <h1 className="ml-5 capitalize">{jobLocation}</h1>
        </div>

        <div className="px-2 pt-5">
          <h1 className="md:text-2xl text-xl font-bold">Salary</h1>
          <h1 className="ml-5 capitalize">{salaryRange} tk</h1>
        </div>
        <div className="px-2 pt-5">
          <h1 className="md:text-2xl text-xl font-bold">
            Compensation & Other Benefits
          </h1>
          <ul className="pt-3 flex flex-col gap-2">
            <li className="list-disc ml-5">{OtherBenefits1}</li>
            <li className="list-disc ml-5">{OtherBenefits2}</li>
            <li className="list-disc ml-5">{OtherBenefits3}</li>
            <li className="list-disc ml-5">{OtherBenefits4}</li>
          </ul>
        </div>

        <div className="pt-5 flex justify-center items-center">
          <ApplyModal
            email={email}
            applicationDateLine={applicationDateLine}
            _id={_id}
            applicantNumber={applicantNumber}
            jobTitle={jobTitle}
            jobCat={jobCat}
            salaryRange={salaryRange}
            jobPostingDate={jobPostingDate}
          />
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default ViewDetails;
