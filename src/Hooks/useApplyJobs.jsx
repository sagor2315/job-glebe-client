import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useApplyJobs = () => {
  const [applyJobsData, setApplyJobsData] = useState();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(
        `   https://b8a11-server-side-md-zahidul-islam15-mdzahidulislam15.vercel.app/applyjobs?email=${user?.email}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        const data = res.data;
        setApplyJobsData(data);
        console.log(data);
      });
  }, [user?.email]);

  return applyJobsData;
};

export default useApplyJobs;
