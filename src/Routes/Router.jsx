import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import TaskBoardLayOut from "../TaskBoard/Layout/TaskBoardLayOut";

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
    element: <TaskBoardLayOut></TaskBoardLayOut>
  },
]);

export default router;