import { Button, Card, Spinner, Typography } from "@material-tailwind/react";
// import useAllJobs from "../../Hooks/useAllJobs";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import ScrollToTopButton from "../HomePage/ScrollToTopButton/ScrollToTopButton";
import { Helmet } from "react-helmet-async";

const TABLE_HEAD = [
  "Posted By",
  "Job Title",
  "Posting Date",
  "DateLine",
  "Salary Range",
  "Details",
];

// const TABLE_ROWS = [
//   {
//     PostedBy: "John Michael",
//     JobTitle: "Manager",
//     PostingDate: "23/04/18",
//     DateLine: "23/04/18",
//     SalaryRange: "23/04/18",
//     Details: "23/04/18",
//   },
//   {
//     name: "Alexa Liras",
//     job: "Developer",
//     date: "23/04/18",
//   },
//   {
//     name: "Laurent Perrier",
//     job: "Executive",
//     date: "19/09/17",
//   },
//   {
//     name: "Michael Levi",
//     job: "Developer",
//     date: "24/12/08",
//   },
//   {
//     name: "Richard Gran",
//     job: "Manager",
//     date: "04/10/21",
//   },
// ];

const AllJobs = () => {
  const { user } = useContext(AuthContext);
  const [allJobsData, setAllJobsData] = useState();
  useEffect(() => {
    axios
      .get(
        "   https://b8a11-server-side-md-zahidul-islam15-mdzahidulislam15.vercel.app/addajob"
      )
      .then((res) => {
        const data = res.data;
        setAllJobsData(data);
      });
  }, []);

  const handleViewDetails2 = () => {
    user
      ? ""
      : Swal.fire({
          title: "Are you logged in?",
          text: "Without login, you can not visit the single job details page.",
          icon: "question",
        });
  };

  // const allJobsData = useAllJobs();

  if (!allJobsData) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <Spinner className="h-16 w-16  text-gray-900/50" />
      </div>
    );
  }

  return (
    <div className="mt-20 md:mx-10 mx-3">
      <Helmet>
        <title>JobGlebe | All Jobs</title>
      </Helmet>
      <Card className="h-full w-full overflow-x-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className=" bg-secondaryColor p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-semibold text-lg text-white text-center"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allJobsData?.map((job) => (
              <tr key={job._id} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-center"
                  >
                    {job.userNm}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-center"
                  >
                    {job.jobTitle}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-center"
                  >
                    {job.jobPostingDate?.split(":")[0].slice(0, -3)}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium text-center"
                  >
                    {job.applicationDateLine?.split(":")[0].slice(0, -3)}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium text-center"
                  >
                    {job.salaryRange} tk
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-medium text-center"
                  >
                    <NavLink to={`/viewdetails/${job._id}`}>
                      <Button
                        onClick={handleViewDetails2}
                        className="bg-secondaryColor"
                      >
                        Details
                      </Button>
                    </NavLink>
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <ScrollToTopButton />
    </div>
  );
};

export default AllJobs;
