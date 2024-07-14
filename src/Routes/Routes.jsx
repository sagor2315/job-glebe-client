import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import MyJobs from "../Pages/MyJobs/MyJobs";
import AddAJob from "../Pages/AddAJob/AddAJob";
import AllJobs from "../Pages/AllJobs/AllJobs";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import EditAddAJob from "../Pages/EditAddAJob/EditAddAJob";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/appliedjobs",
        element: (
          <PrivateRoutes>
            <AppliedJobs />
          </PrivateRoutes>
        ),
      },
      {
        path: "/myjobs",
        element: (
          <PrivateRoutes>
            <MyJobs />
          </PrivateRoutes>
        ),
      },
      {
        path: "/addajob",
        element: (
          <PrivateRoutes>
            <AddAJob />
          </PrivateRoutes>
        ),
      },
      {
        path: "/alljobs",
        element: <AllJobs />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/editaddajob/:id",
        element: (
          <PrivateRoutes>
            <EditAddAJob />
          </PrivateRoutes>
        ),
        loader: ({ params }) => {
          return fetch(
            `   https://b8a11-server-side-md-zahidul-islam15-mdzahidulislam15.vercel.app/addajob/${params.id}`
          );
        },
      },
      {
        path: "/viewdetails/:id",
        element: (
          <PrivateRoutes>
            <ViewDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) => {
          return fetch(
            `   https://b8a11-server-side-md-zahidul-islam15-mdzahidulislam15.vercel.app/addajob/${params.id}`
          );
        },
      },
    ],
  },
]);

export default router;
