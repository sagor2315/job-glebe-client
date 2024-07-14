import axios from "axios";
import { useEffect } from "react";
import useAuth from "./Auth/useAuth";
import { useNavigate } from "react-router-dom";

const axiosForSecurity = axios.create({
  baseURL:
    "   https://b8a11-server-side-md-zahidul-islam15-mdzahidulislam15.vercel.app",
  withCredentials: true,
});

const useAxiosForSecurity = () => {
  const { LogOutUser } = useAuth();
  console.log(LogOutUser);
  const navigate = useNavigate();
  useEffect(() => {
    axiosForSecurity.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error tracked in the interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("logout the user");
          LogOutUser()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => console.log(error));
        }
      }
    );
  }, [LogOutUser, navigate]);
  return axiosForSecurity;
};

export default useAxiosForSecurity;
