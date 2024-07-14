import { Card, Input, Button, Typography } from "@material-tailwind/react";
// import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/Auth/useAuth";
// import { AuthContext } from "../../Provider/AuthProvider";
// import useAxiosForSecurity from "../../Hooks/useAxiosForSecurity";

const Login = () => {
  const { signInUser, signWithGoogle } = useAuth();
  // const axiosForSecurity = useAxiosForSecurity();

  const navigate = useNavigate();
  const location = useLocation();

  // console.log(location?.state);
  // console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((res) => {
        const user = res.user;

        // const userEmail = { email };

        // axiosForSecurity.post("/jwt", userEmail).then((res) => {
        //   const data = res.data;
        navigate(location?.state ? location?.state : "/");
        //   console.log(data);
        // });

        console.log(user);
      })
      .catch((error) => {
        const errormessage = error.errormessage;
        console.log(errormessage);
        console.log(error);
      });
  };

  const handleGoogleLogIn = () => {
    signWithGoogle()
      .then((res) => {
        const user = res.user;
        navigate(location?.state ? location?.state : "/");
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.errormessage;
        console.log(errorMessage);
        console.log(error);
      });
  };

  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex justify-center items-center my-20"
    >
      <Typography variant="h4" className="text-textPrimary">
        Login
      </Typography>
      <Typography className="mt-1 font-normal text-textPrimary">
        Please login using your email and password.
      </Typography>
      <form
        onSubmit={handleLogin}
        className="mt-8 mb-2 lg:w-2/6 md:w-1/2 w-10/12"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Input
            size="lg"
            label="Email"
            type="email"
            name="email"
            color="blue"
            // className="outline-1 outline-secondaryColor"
          />

          <Input
            type="password"
            size="lg"
            label="Password"
            name="password"
            color="blue"
            // className="outline-1 outline-secondaryColor"
          />
        </div>

        <Button type="submit" className="mt-6 bg-secondaryColor" fullWidth>
          Login
        </Button>
      </form>
      <Button
        onClick={handleGoogleLogIn}
        type="submit"
        className="mt-3 bg-secondaryColor lg:w-2/6 md:w-1/2 w-10/12"
      >
        Login with Google
      </Button>
      <Typography color="gray" className="mt-4 text-center font-normal">
        If you do not have an account please{" "}
        <Link to="/signup" className="font-medium text-gray-900">
          <span className="border-b-2 border-b-secondaryColor text-secondaryColor">
            Register
          </span>
        </Link>
      </Typography>
    </Card>
  );
};

export default Login;
