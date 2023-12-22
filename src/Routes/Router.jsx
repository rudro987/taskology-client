import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import TaskBoardLayOut from "../TaskBoard/Layout/TaskBoardLayOut";
import Profile from "../TaskBoard/Profile/Profile";
import AddTask from "../TaskBoard/AddTask/AddTask";
import PrivateRoute from "../Routes/PrivateRoute";
import HandleTasks from "../TaskBoard/HandleTasks/HandleTasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
    ]
  },
  {
    path: "/taskboard",
    element: <PrivateRoute><TaskBoardLayOut></TaskBoardLayOut></PrivateRoute>,
    children: [
      {
        path: "/taskboard",
        element: <h1>Welcome to taskboard</h1>
      },
      {
        path: "/taskboard/profile",
        element: <Profile></Profile>
      },
      {
        path: "/taskboard/HandleTasks",
        element: <HandleTasks></HandleTasks>
      },
      {
        path: "/taskboard/addTask",
        element: <AddTask></AddTask>
      }
    ]
  },
]);

export default router;