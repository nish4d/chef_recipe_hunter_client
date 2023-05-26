import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layouts/Main";
import Home from "../components/Pages/Home/Home";
import Blog from "../components/Pages/Blog/Blog";
import Contact from "../components/Pages/Contact/Contact";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Login/Register";
import Chef from "../components/Pages/Chef/Chef";
import PrivateRouter from "./PrivateRouter";
import Error from "../components/Pages/shared/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch("http://localhost:5000/chef"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/chef/:id",
        element: <PrivateRouter><Chef></Chef></PrivateRouter> ,
        loader: ({params}) => fetch(`https://chef-recipe-hunter-server-ten-virid.vercel.app/chef/${params.id}`),
      },
    ],
  },
]);

export default router;
