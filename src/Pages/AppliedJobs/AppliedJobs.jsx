import {
  Button,
  Card,
  Option,
  Select,
  Spinner,
  Typography,
} from "@material-tailwind/react";
// import useAllJobs from "../../Hooks/useAllJobs";
import { useContext, useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosForSecurity from "../../Hooks/useAxiosForSecurity";
import ScrollToTopButton from "../HomePage/ScrollToTopButton/ScrollToTopButton";
import { Helmet } from "react-helmet-async";

const TABLE_HEAD = [
  "Job Title",
  "Job Category",
  "Posting Date",
  "DateLine",
  "Salary Range",
  "Details",
];

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const axiosSecurity = useAxiosForSecurity();
  const [allJobsData, setAllJobsData] = useState();

  const [onSiteJobsAll, setOnSiteJobsAll] = useState();
  const [remoteJobsAll, setRemoteJobsAll] = useState();
  const [hybridJobsAll, setHybridJobsAll] = useState();
  const [partTimeJobsAll, setPartTimeJobsAll] = useState();
  const [selectId, setSelectId] = useState(0);

  const selectData = [
    "All Jobs",
    "On Site Jobs",
    "Remote Jobs",
    "Hybrid Jobs",
    "Part Time Jobs",
  ];

  const categoryDataMap = {
    0: allJobsData,
    1: onSiteJobsAll,
    2: remoteJobsAll,
    3: hybridJobsAll,
    4: partTimeJobsAll,
  };

  const handleSelect = (id) => {
    setSelectId(id);
    console.log(id);
  };

  useEffect(() => {
    const onSiteJobs = allJobsData?.filter(
      (data) => data.jobCat.toLowerCase() === "On Site Jobs".toLowerCase()
    );
    const remoteJobs = allJobsData?.filter(
      (data) => data.jobCat.toLowerCase() === "Remote Jobs".toLowerCase()
    );
    const hybridJobs = allJobsData?.filter(
      (data) => data.jobCat.toLowerCase() === "Hybrid Jobs".toLowerCase()
    );
    const partTimeJobs = allJobsData?.filter(
      (data) => data.jobCat.toLowerCase() === "Part Time Jobs".toLowerCase()
    );
    setOnSiteJobsAll(onSiteJobs);
    setRemoteJobsAll(remoteJobs);
    setHybridJobsAll(hybridJobs);
    setPartTimeJobsAll(partTimeJobs);
  }, [allJobsData]);

  useEffect(() => {
    axiosSecurity.get(`/applyjobs?email=${user?.email}`).then((res) => {
      const data = res.data;
      setAllJobsData(data);
    });
  }, [axiosSecurity, user?.email]);
  console.log(allJobsData);
  console.log(onSiteJobsAll);
  console.log(partTimeJobsAll);
  console.log(hybridJobsAll);
  console.log(remoteJobsAll);

  if (!allJobsData) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <Spinner className="h-16 w-16  text-gray-900/50" />
      </div>
    );
  }

  return (
    <div className="mt-10 md:mx-10 mx-3">
      <Helmet>
        <title>JobGlebe | Applied Jobs</title>
      </Helmet>
      <Card className="h-full w-full">
        <div className="w-72 py-5">
          <Select label="Select Job Category">
            {selectData.map((data, id) => (
              <Option onClick={() => handleSelect(id)} key={id}>
                {data}
              </Option>
            ))}
          </Select>
        </div>

        <table className="w-full min-w-max table-auto text-left overflow-x-scroll">
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
            {(categoryDataMap[selectId] || allJobsData)?.map((job) => (
              <tr key={job?._id} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-center"
                  >
                    {job?.jobTitle}
                  </Typography>
                </td>

                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-center capitalize"
                  >
                    {job?.jobCat}
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
                      <Button className="bg-secondaryColor">Details</Button>
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

export default AppliedJobs;
