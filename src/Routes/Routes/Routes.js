import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home";
import Main from "../../Layouts/Main";
import Details from "../../Pages/Details";
import Media from "../../Pages/Media";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/media',
                element: <Media></Media>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/allPosts/${params.id}`)
                }
            }
        ]
    }
])