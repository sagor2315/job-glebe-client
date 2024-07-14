import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosForSecurity from "../../Hooks/useAxiosForSecurity";
import emailjs from "emailjs-com";
// import useAllJobs from "../../Hooks/useAllJobs";

const ApplyModal = ({
  email,
  applicationDateLine,
  _id,
  jobTitle,
  jobCat,
  salaryRange,
  jobPostingDate,
}) => {
  const { user, idProvider } = useContext(AuthContext);
  const [size, setSize] = React.useState(null);
  const handleOpen = (value) => setSize(value);
  const [ownJob, setOwnJob] = useState();
  const [dateOver, setDateOver] = useState();

  const axiosForSecurity = useAxiosForSecurity();
  console.log(_id);

  // const handleSend = (e) => {
  //   e.preventDefault();
  //   const userName = user?.displayName;
  //   const userEmail = user?.email;
  //   const BioDataLink = e.target.BioDataLink.value;
  //   console.log(userName, userEmail, BioDataLink);

  //   const applyData = {
  //     _id,
  //     userName,
  //     userEmail,
  //     BioDataLink,
  //     applicantNumber: 0,
  //   };

  //   const appDateLine = new Date(applicationDateLine).getTime();
  //   const todaysDate = Date.now();

  //   if (appDateLine < todaysDate) {
  //     console.log("The Application dateline is over!");
  //     return setDateOver("The Application dateline is over!");
  //   }

  //   if (email === user?.email) {
  //     return setOwnJob("You can't apply your own job!");
  //   }

  //   axiosForSecurity
  //     .post(`/applyjobs?email=${user?.email}`, applyData)
  //     .then((res) => {
  //       const data = res.data;
  //       setOwnJob("Your application is completed");
  //       // console.log(data);
  //       console.log("Response from Server:", data);
  //     });

  //   console.log(appDateLine);
  //   console.log(todaysDate);
  // };

  const handleSend = (e) => {
    e.preventDefault();
    const userName = user?.displayName;
    const userEmail = user?.email;
    const BioDataLink = e.target.BioDataLink.value;
    console.log(userName, userEmail, BioDataLink);

    // Check if userEmail is available
    if (!userEmail) {
      console.error("User email is undefined");
      return;
    }

    const applyData = {
      _id,
      userName,
      userEmail,
      BioDataLink,
      applicantNumber: 0,
      jobTitle: jobTitle,
      jobCat: jobCat,
      salaryRange: salaryRange,
      jobPostingDate: jobPostingDate,
      applicationDateLine: applicationDateLine,
    };

    const appDateLine = new Date(applicationDateLine).getTime();
    const todaysDate = Date.now();

    if (appDateLine < todaysDate) {
      console.log("The Application dateline is over!");
      return setDateOver("The Application dateline is over!");
    }

    if (email === userEmail) {
      return setOwnJob("You can't apply your own job!");
    }

    emailjs
      .sendForm(
        "service_y2mgyeb",
        "template_k2ydf14",
        e.target,
        "8jao5KzYwgR0dUY6I"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    axiosForSecurity
      .post(`/applyjobs?email=${userEmail}`, applyData)
      .then((res) => {
        const data = res.data;
        setOwnJob("Your application is completed");
        console.log("Response from Server:", data);
        console.log(data);
      });

    console.log(appDateLine);
    console.log(todaysDate);
  };

  return (
    <>
      <div className="flex gap-3">
        <Button
          onClick={() => {
            handleOpen("xxl"), setOwnJob(""), setDateOver("");
          }}
          //   variant="gradient"
          //   color="blue"
          className="bg-secondaryColor capitalize font-fontLat text-lg"
        >
          Apply Now
        </Button>
      </div>
      <Dialog
        open={size === "xxl"}
        size={size || "md"}
        handler={handleOpen}
        className="h-screen"
      >
        <form onSubmit={handleSend}>
          <DialogHeader className="flex justify-center">
            {" "}
            Apply This Job Now
          </DialogHeader>

          <DialogBody>
            <div className="flex flex-col gap-5 lg:w-2/3 md:w-3/4 mx-auto">
              <Input
                color="blue"
                name="userName"
                variant="outlined"
                cols="30"
                rows="10"
                className="w-full"
                label="User Name"
                defaultValue={user?.displayName}
              />
              <Input
                color="blue"
                name="userEmail"
                variant="outlined"
                cols="30"
                rows="10"
                className="w-full"
                label="User Email"
                defaultValue={user?.email}
              />
              <Input
                color="blue"
                name="BioDataLink"
                variant="outlined"
                cols="30"
                rows="10"
                className="w-full"
                label="Bio-data Link"
              />
            </div>
          </DialogBody>
          <DialogFooter className="flex justify-center">
            <Button
              onClick={() => idProvider(_id)}
              // variant="gradient"
              // color="blue"
              type="submit"
              className="bg-secondaryColor rounded-full w-28 capitalize font-fontLat text-lg"
              //   onClick={() => handleOpen(null)}
            >
              <span>Send</span>
            </Button>
          </DialogFooter>
        </form>
        <Button
          variant="filled"
          color="orange"
          onClick={() => handleOpen(null)}
          className="rounded-full capitalize font-fontLat text-base w-28 mx-auto"
        >
          <span>Cancel</span>
        </Button>
        <div className="text-center">{ownJob ? ownJob : ""}</div>
        <div className="text-center">{dateOver ? dateOver : ""}</div>
      </Dialog>
    </>
  );
};

ApplyModal.propTypes = {
  applicationDateLine: PropTypes.string,
  email: PropTypes.string,
  jobTitle: PropTypes.string,
  _id: PropTypes.string,
  jobCat: PropTypes.string,
  salaryRange: PropTypes.string,
  jobPostingDate: PropTypes.string,
};

export default ApplyModal;
