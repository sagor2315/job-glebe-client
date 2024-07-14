import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  // Textarea,
} from "@material-tailwind/react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosForSecurity from "../../Hooks/useAxiosForSecurity";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useApplyJobs from "../../Hooks/useApplyJobs";
import ScrollToTopButton from "../HomePage/ScrollToTopButton/ScrollToTopButton";
import { Helmet } from "react-helmet-async";

const AddAJob = () => {
  const { user } = useContext(AuthContext);
  const axiosForSecurity = useAxiosForSecurity();

  // jobPostingDate,
  // applicationDateLine,
  const [jobPostingDate, setJobPostingDate] = useState(null);
  const [applicationDateLine, setApplicationDateLine] = useState(null);
  const [applicantNum, setApplicantNum] = useState();

  const applyJObsData = useApplyJobs();

  useEffect(() => {
    const specificJobApplicantNum = applyJObsData?.map((data) => data);
    setApplicantNum(specificJobApplicantNum);
  }, [applyJObsData]);
  console.log(applicantNum);

  const handleJobPost = (e) => {
    e.preventDefault();
    const jobBanner = e.target.jobBanner.value;
    const companyLogo = e.target.companyLogo.value;
    const jobTitle = e.target.jobTitle.value;
    const jobCat = e.target.jobCat.value;
    // const applicantNumber = e.target.applicantNum.value;
    const userNm = user?.displayName;
    const salaryRange = e.target.salaryRange.value;

    // const dateFormateConvert = (stringDate) => {
    //   const date = new Date(stringDate);
    //   const year = date.getFullYear();
    //   const month = String(date.getMonth() + 1).padStart(2, "0");
    //   const day = String(date.getDate()).padStart(2, "0");
    //   return `${year}-${month}-${day}`;
    // };

    // const jobPostingDate = e.target.jobPDate.value;
    // const applicationDateLine = e.target.AppDateline.value;

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
      jobBanner,
      jobTitle,
      jobCat,
      userNm,
      // applicantNumber,
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
      // startDate
    );

    const allAddJobData = {
      email,
      jobBanner,
      jobTitle,
      jobCat,
      userNm,
      applicantNumber: 0,
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
      // startDate,
      // endDate,
    };

    // fetch(`   https://b8a11-server-side-md-zahidul-islam15-mdzahidulislam15.vercel.app/addajob?email=${user.email}`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(allAddJobData),
    // })
    axiosForSecurity
      .post(`/addajob?email=${user.email}`, allAddJobData, {
        incrementApplicantNumber: true,
      })
      // .then((res) => res.json())
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log(axiosForSecurity);

  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex justify-center items-center mt-8"
    >
      <Helmet>
        <title>JobGlebe | Add A Job</title>
      </Helmet>
      <Typography variant="h4" className="text-textPrimary mx-2">
        Add Your Job Listing Today!
      </Typography>
      <Typography className="mt-1 font-normal text-textPrimary text-center mx-2">
        Your next hire is just a click away. Showcase your job opening to a
        global audience and connect with top talent. Let`s build the future
        together
      </Typography>
      <form
        onSubmit={handleJobPost}
        className="mt-8 mb-2 lg:w-2/3 md:w-11/12 w-11/12"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Input
            name="jobBanner"
            size="lg"
            label="Job Banner"
            type="text"
            color="blue"
          />
          <Input
            name="companyLogo"
            size="lg"
            label="Company logo"
            type="text"
            color="blue"
          />

          <Input
            name="jobTitle"
            size="lg"
            label="Job Title"
            type="text"
            color="blue"
            variant="outlined"
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
            {" "}
            <Input
              type="text"
              size="lg"
              label="Salary Range"
              name="salaryRange"
              color="blue"
              className=""
            />
            <DatePicker
              name="jobPDateNew"
              dateFormat="yyyy-MM-dd"
              placeholderText="YYYY-MM-DD"
              selected={jobPostingDate}
              onChange={(date) => setJobPostingDate(date)}
              className="border border-[#B0BEC5] outline-1 outline-secondaryColor py-2 pl-2 rounded w-full"
            />
            <DatePicker
              dateFormat="yyyy-MM-dd"
              placeholderText="YYYY-MM-DD"
              name="AppDateline"
              selected={applicationDateLine}
              onChange={(date) => setApplicationDateLine(date)}
              className="border border-[#B0BEC5] text-[#B0BEC5] outline-1 outline-secondaryColor py-2 pl-2 rounded w-full"
            />
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
            />
            <Input
              color="blue"
              name="jobResponsibilities2"
              variant="outlined"
              cols="30"
              rows="10"
              className="w-full"
              label="Job Responsibilities 2"
            />
            <Input
              color="blue"
              name="jobResponsibilities3"
              variant="outlined"
              cols="30"
              rows="10"
              className="w-full"
              label="Job Responsibilities 3"
            />
            <Input
              color="blue"
              name="jobResponsibilities4"
              variant="outlined"
              cols="30"
              rows="10"
              className="w-full"
              label="Job Responsibilities 4"
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
            />
            <Input
              color="blue"
              name="eduRequirements2"
              variant="outlined"
              cols="30"
              rows="10"
              className="w-full"
              label="Educational Requirements 2"
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
            />
            <Input
              color="blue"
              name="expReq2"
              variant="outlined"
              cols="30"
              rows="10"
              className="w-full"
              label="Experience Requirements 2"
            />
            <Input
              color="blue"
              name="expReq3"
              variant="outlined"
              cols="30"
              rows="10"
              className="w-full"
              label="Experience Requirements 3"
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
            />
            <Input
              color="blue"
              name="addReq2"
              variant="outlined"
              cols="30"
              rows="10"
              className="w-full"
              label="Additional Requirements 2"
            />
            <Input
              color="blue"
              name="addReq3"
              variant="outlined"
              cols="30"
              rows="10"
              className="w-full"
              label="Additional Requirements 3"
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
            />
            <Input
              color="blue"
              name="OtherBenefits2"
              variant="outlined"
              cols="30"
              rows="10"
              className="w-full"
              label="Compensation & Other Benefits 2"
            />
            <Input
              color="blue"
              name="OtherBenefits3"
              variant="outlined"
              cols="30"
              rows="10"
              className="w-full"
              label="Compensation & Other Benefits 3"
            />
            <Input
              color="blue"
              name="OtherBenefits4"
              variant="outlined"
              cols="30"
              rows="10"
              className="w-full"
              label="Compensation & Other Benefits 4"
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
          Add Your Gob
        </Button>
      </form>
      <ScrollToTopButton />
    </Card>
  );
};

export default AddAJob;
