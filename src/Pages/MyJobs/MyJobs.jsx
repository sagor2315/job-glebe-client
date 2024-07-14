import { Button, Card, Spinner, Typography } from "@material-tailwind/react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";

import useAxiosForSecurity from "../../Hooks/useAxiosForSecurity";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { NavLink } from "react-router-dom";
import ScrollToTopButton from "../HomePage/ScrollToTopButton/ScrollToTopButton";
import { Helmet } from "react-helmet-async";

const TABLE_HEAD = [
  "",
  "Job Title",
  "Posting Date",
  "DateLine",
  "Salary Range",
  "",
];

const MyJobs = () => {
  const [allJobsDataByUser, setAllJobsDataByUser] = useState();

  const { user } = useContext(AuthContext);

  const axiosForSecurity = useAxiosForSecurity();

  const url = `/addajob?email=${user.email}`;

  const handleDeleteData = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "If yes then click delete button or cancel it",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `/addajob/${id}`;
        axiosForSecurity.delete(url).then((res) => {
          const data = res.data;
          console.log(data);
          if (data.deletedCount > 0) {
            const remaining = allJobsDataByUser.filter(
              (data) => data._id !== id
            );
            setAllJobsDataByUser(remaining);

            Swal.fire({
              title: "Deleted!",
              text: "Your added job has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });

    console.log(id);
  };

  useEffect(() => {
    axiosForSecurity.get(url).then((res) => {
      const data = res.data;
      setAllJobsDataByUser(data);
    });
  }, [url, axiosForSecurity]);

  if (!allJobsDataByUser) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <Spinner className="h-16 w-16  text-gray-900/50" />
      </div>
    );
  }

  return (
    <div className="mt-20 md:mx-10 mx-3">
      <Helmet>
        <title>JobGlebe | My Jobs</title>
      </Helmet>
      <Card className="h-full w-full overflow-x-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, idx) => (
                <th key={(head, idx)} className=" bg-secondaryColor p-4">
                  <Typography
                    component="span"
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
            {allJobsDataByUser?.map((job) => (
              <tr key={job._id} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    component="span"
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-center"
                  >
                    <Button
                      onClick={() => handleDeleteData(job._id)}
                      className="bg-secondaryColor py-2 px-4"
                    >
                      <MdDeleteForever className="text-xl" />
                    </Button>
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    component="span"
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-center"
                  >
                    {job.jobTitle}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    component="span"
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-center"
                  >
                    {job?.jobPostingDate?.split(":")[0].slice(0, -3)}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    component="span"
                    variant="small"
                    color="blue-gray"
                    className="font-medium text-center"
                  >
                    {job?.applicationDateLine?.split(":")[0].slice(0, -3)}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    component="span"
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
                    component="span"
                    variant="small"
                    color="blue-gray"
                    className="font-medium text-center"
                  >
                    <NavLink to={`/editaddajob/${job._id}`}>
                      <Button className="bg-secondaryColor py-2 px-4">
                        <FaEdit className="text-xl" />
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

export default MyJobs;
