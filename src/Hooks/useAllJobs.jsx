import axios from "axios";
import { useEffect, useState } from "react";

const useAllJobs = () => {
  const [allJobs, setAllJobs] = useState();

  useEffect(() => {
    axios
      .get(
        "   https://b8a11-server-side-md-zahidul-islam15-mdzahidulislam15.vercel.app/addajob",
        { withCredentials: true }
      )
      .then((res) => {
        const data = res.data;
        setAllJobs(data);
      });
  }, []);
  return allJobs;
};

export default useAllJobs;
