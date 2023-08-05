import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import SingleItem from "../components/SingleItem/SingleItem";
import MultipleItems from "../components/MultipleItems/MultipleItems";
import Fade from "../components/Fade/Fade";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout></Layout>,
        children: [
           {
            path:'/singleItem',
            element:<SingleItem></SingleItem>
           },
           {
            path:'/multipleItems',
            element:<MultipleItems></MultipleItems>
           },
           {
            path:'/',
            element:<Fade></Fade>
           }
        ]
    }

])

export default router;