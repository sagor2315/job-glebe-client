import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

const SignUp = () => {
  const { createUser, signWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.url.value;
    console.log("register", name, email, password, photoUrl);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        navigate("/");
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then((res) => {
            console.log("Profile updated", res.user);
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(error);
        console.log(errorMessage);
      });
  };

  const handleGoogleSignUp = (e) => {
    e.preventDefault();
    signWithGoogle()
      .then((res) => {
        const user = res.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex justify-center items-center mt-8"
    >
      <Typography variant="h4" className="text-textPrimary">
        Sign Up
      </Typography>
      <Typography className="mt-1 font-normal text-textPrimary">
        Want to explore more? Enter the necessary info to register.
      </Typography>
      <form
        onSubmit={handleRegister}
        className="mt-8 mb-2 lg:w-2/6 md:w-1/2 w-10/12"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Input name="name" size="lg" label="Name" type="text" color="blue" />

          <Input
            name="email"
            size="lg"
            label="Email"
            type="email"
            color="blue"
            variant="outlined"
            // className="border-b-2 border-blue-500 focus:outline-none focus:border-blue-700"
          />

          <Input
            type="text"
            size="lg"
            label="Photo Url"
            name="url"
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
          sign up
        </Button>
      </form>
      <Button
        onClick={handleGoogleSignUp}
        type="submit"
        className="mt-3 bg-secondaryColor lg:w-2/6 md:w-1/2 w-10/12"
      >
        sign up with Google
      </Button>
      <Typography color="gray" className="mt-4 text-center font-normal">
        If you already have an account please{" "}
        <Link to="/login" className="font-medium text-gray-900">
          <span className="border-b-2 border-b-secondaryColor text-secondaryColor">
            Sign In
          </span>
        </Link>
      </Typography>
    </Card>
  );
};

export default SignUp;
