import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import useAxiosForSecurity from "../../Hooks/useAxiosForSecurity";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

import "./DatePicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet-async";

const EditAddAJob = () => {
  const axiosForSecurity = useAxiosForSecurity();
  const { user } = useContext(AuthContext);
  // const [forEditData, setForEditData] = useState();
  // const url = `/addajob?email=${user?.email}`;
  const {
    _id,
    jobBanner,
    jobTitle,
    jobCat,
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
    companyLogo,
  } = useLoaderData();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    if (jobPostingDate && applicationDateLine) {
      const parsedDate = new Date(jobPostingDate);
      const parsedEndDate = new Date(applicationDateLine);

      if (!isNaN(parsedDate.getTime() && parsedEndDate.getTime())) {
        setStartDate(parsedDate);
        setEndDate(parsedEndDate);
      }
    }
  }, [jobPostingDate, applicationDateLine]);

  const handleJobPostEdit = (e) => {
    e.preventDefault();
    const jobBanner = e.target.jobBanner.value;
    const companyLogo = e.target.companyLogo.value;
    const jobTitle = e.target.jobTitle.value;
    const jobCat = e.target.jobCat.value;
    const applicantNumber = e.target.applicantNum.value;
    const userNm = user?.displayName;
    const salaryRange = e.target.salaryRange.value;

    //   const date = new Date(stringDate);
    //   const year = date.getFullYear();
    //   const month = String(date.getMonth() + 1).padStart(2, "0");
    //   const day = String(date.getDate()).padStart(2, "0");
    //   return `${year}-${month}-${day}`;
    // };

    // const jobPostingDate = e.target.jobPDate.value;
    // const applicationDateLine = e.target.AppDateline.value;

    // console.log("jobPostingDate:", e.target.jobPDate.value);
    // console.log("applicationDateLine:", e.target.AppDateline.value);

    const jobResponsibilities1 = e.target.jobResponsibilities1.value;
    const jobResponsibilities2 = e.target.jobResponsibilities2.value;
    const jobResponsibilities3 = e.target.jobResponsibilities3.value;
    const jobResponsibilities4 = e.target.jobResponsibilities4.value;

    const eduRequirements1 = e.target.eduRequirements1.value;
    const eduRequirements2 = e.target.eduRequirements2.value;

    const expReq1 = e.target.expReq1.value;
    const expReq2 = e.target.expReq2.value;
    const expReq3 = e.target.expReq3.value;

    const addReq1 = e.target.addReq1.value;
    const addReq2 = e.target.addReq2.value;
    const addReq3 = e.target.addReq3.value;

    const jobLocation = e.target.jobLocation.value;

    const OtherBenefits1 = e.target.OtherBenefits1.value;
    const OtherBenefits2 = e.target.OtherBenefits2.value;
    const OtherBenefits3 = e.target.OtherBenefits3.value;
    const OtherBenefits4 = e.target.OtherBenefits4.value;

    const email = user.email;
    console.log(
      "JobPost",
      email,
      jobBanner,
      jobTitle,
      jobCat,
      userNm,
      applicantNumber,
      salaryRange,

      // jobPostingDate,
      // applicationDateLine,

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
      companyLogo
    );

    console.log(companyLogo);

    const allAddJobData = {
      email,
      jobBanner,
      jobTitle,
      jobCat,
      userNm,
      applicantNumber,
      salaryRange,

      // jobPostingDate,
      // applicationDateLine,

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
      companyLogo,
      startDate,
      endDate,
    };

    // fetch(`   https://b8a11-server-side-md-zahidul-islam15-mdzahidulislam15.vercel.app/addajob?email=${user.email}`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(allAddJobData),
    // })
    axiosForSecurity
      .put(`/addajob/${_id}`, allAddJobData)
      // .then((res) => res.json())
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Edit Job - {_id}</title>
      </Helmet>
      <Card
        color="transparent"
        shadow={false}
        className="flex justify-center items-center mt-8"
      >
        <Typography variant="h4" className="text-textPrimary mx-2">
          Edit Your Listing Job!
        </Typography>
        <form
          onSubmit={handleJobPostEdit}
          className="mt-8 mb-2 lg:w-2/3 md:w-11/12 w-11/12"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Input
              name="jobBanner"
              size="lg"
              label="Job Banner"
              type="text"
              color="blue"
              defaultValue={jobBanner}
            />
            <Input
              name="companyLogo"
              size="lg"
              label="Job Banner"
              type="text"
              color="blue"
              defaultValue={companyLogo}
            />

            <Input
              name="jobTitle"
              size="lg"
              label="Job Title"
              type="text"
              color="blue"
              variant="outlined"
              defaultValue={jobTitle}
              // className="border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
            />

            <div className="flex md:flex-row flex-col gap-5">
              {" "}
              <Input
                type="text"
                size="lg"
                label="Job Category"
                name="jobCat"
                color="blue"
                defaultValue={jobCat}
                // className="outline-1 outline-secondaryColor"
              />
              <Input
                type="text"
                size="lg"
                label="User Name"
                name="userNm"
                defaultValue={user?.displayName}
                color="blue"
                // className="outline-1 outline-secondaryColor"
              />
              <Input
                type="text"
                size="lg"
                label="Applicant Number"
                name="applicantNum"
                defaultValue={0}
                color="blue"
                // className="outline-1 outline-secondaryColor"
              />
            </div>
            <div className="flex md:flex-row flex-col gap-5">
              <div className="w-full">
                <Input
                  type="text"
                  size="lg"
                  label="Salary Range"
                  name="salaryRange"
                  color="blue"
                  className=""
                  defaultValue={salaryRange}
                />
              </div>
              {/* <Input
                type="date"
                size="lg"
                label="Job Posting Date"
                name="jobPDate"
                color="blue"
                className="w-1/3"
                defaultValue={jobPostingDate}
              /> */}
              <div className="w-full">
                <DatePicker
                  name="jobPDateNew"
                  dateFormat="yyyy-MM-dd"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="border border-[#B0BEC5] outline-1 outline-secondaryColor py-2 pl-2 rounded "
                />
              </div>
              <div className="w-full">
                <DatePicker
                  name="AppDateline"
                  dateFormat="yyyy-MM-dd"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  className="border border-[#B0BEC5] outline-1 outline-secondaryColor py-2 pl-2 rounded "
                />
              </div>

              {/* <Input
                type="date"
                size="lg"
                label="Application DateLine"
                name="AppDateline"
                color="blue"
                className="w-1/3"
                defaultValue={applicationDateLine}
              /> */}
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="pb-2 md:text-2xl font-bold">Job Descriptions</h1>
              <Input
                color="blue"
                name="jobResponsibilities1"
                variant="outlined"
                cols="30"
                rows="10"
                className="w-full"
                label="Job Responsibilities 1"
                defaultValue={jobResponsibilities1}
              />
              <Input
                color="blue"
                name="jobResponsibilities2"
                variant="outlined"
                cols="30"
                rows="10"
                className="w-full"
                label="Job Responsibilities 2"
                defaultValue={jobResponsibilities2}
              />
              <Input
                color="blue"
                name="jobResponsibilities3"
                variant="outlined"
                cols="30"
                rows="10"
                className="w-full"
                label="Job Responsibilities 3"
                defaultValue={jobResponsibilities3}
              />
              <Input
                color="blue"
                name="jobResponsibilities4"
                variant="outlined"
                cols="30"
                rows="10"
                className="w-full"
                label="Job Responsibilities 4"
                defaultValue={jobResponsibilities4}
              />
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="pb-2 md:text-2xl font-bold">
                Educational Requirements
              </h1>
              <Input
                color="blue"
                name="eduRequirements1"
                variant="outlined"
                cols="30"
                rows="10"
                className="w-full"
                label="Educational Requirements 1"
                defaultValue={eduRequirements1}
              />
              <Input
                color="blue"
                name="eduRequirements2"
                variant="outlined"
                cols="30"
                rows="10"
                className="w-full"
                label="Educational Requirements 2"
                defaultValue={eduRequirements2}
              />
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="pb-2 md:text-2xl font-bold">
                Experience Requirements
              </h1>
              <Input
                color="blue"
                name="expReq1"
                variant="outlined"
                cols="30"
                rows="10"
                className="w-full"
                label="Experience Requirements 1"
                defaultValue={expReq1}
              />
              <Input
                color="blue"
                name="expReq2"
                variant="outlined"
                cols="30"
                rows="10"
                className="w-full"
                label="Experience Requirements 2"
                defaultValue={expReq2}
              />
              <Input
                color="blue"
                name="expReq3"
                variant="outlined"
                cols="30"
                rows="10"
                className="w-full"
                label="Experience Requirements 3"
                defaultValue={expReq3}
              />
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="pb-2 md:text-2xl font-bold">
                Additional Requirements
              </h1>
              <Input
                color="blue"
                name="addReq1"
                variant="outlined"
                cols="30"
                rows="10"
                className="w-full"
                label="Additional Requirements 1"
                defaultValue={addReq1}
              />
              <Input
                color="blue"
                name="addReq2"
                variant="outlined"
                cols="30"
                rows="10"
                className="w-full"
                label="Additional Requirements 2"
                defaultValue={addReq2}
              />
              <Input
                color="blue"
                name="addReq3"
                variant="outlined"
                cols="30"
                rows="10"
                className="w-full"
                label="Additional Requirements 3"
                defaultValue={addReq3}
              />
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="pb-2 md:text-2xl font-bold">Job Location</h1>
              <Input
                color="blue"
                name="jobLocation"
                variant="outlined"
                cols="30"
                rows="10"
                className="w-full"
                label="Job Location"
                defaultValue={jobLocation}
              />
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="pb-2 md:text-2xl font-bold">
                Compensation & Other Benefits
              </h1>
              <Input
                color="blue"
                name="OtherBenefits1"
                variant="outlined"
                cols="30"
                rows="10"
                className="w-full"
                label="Compensation & Other Benefits 1"
                defaultValue={OtherBenefits1}
              />
              <Input
                color="blue"
                name="OtherBenefits2"
                variant="outlined"
                cols="30"
                rows="10"
                className="w-full"
                label="Compensation & Other Benefits 2"
                defaultValue={OtherBenefits2}
              />
              <Input
                color="blue"
                name="OtherBenefits3"
                variant="outlined"
                cols="30"
                rows="10"
                className="w-full"
                label="Compensation & Other Benefits 3"
                defaultValue={OtherBenefits3}
              />
              <Input
                color="blue"
                name="OtherBenefits4"
                variant="outlined"
                cols="30"
                rows="10"
                className="w-full"
                label="Compensation & Other Benefits 4"
                defaultValue={OtherBenefits4}
              />
            </div>
          </div>

          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6 bg-secondaryColor" fullWidth>
            Save
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default EditAddAJob;
