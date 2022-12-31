import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home";
import Main from "../../Layouts/Main";
import About from "../../Pages/About";
import Details from "../../Pages/Details";
import Edit from "../../Pages/Edit";
import Errorpage from "../../Pages/Erropage";
import Media from "../../Pages/Media";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Errorpage></Errorpage>,
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
                    return fetch(`https://web-application-server.vercel.app/allPosts/${params.id}`)
                }
            },
            {
                path: '/about',
                element: <About></About>,
                // loader: async ({ params }) => {
                //     return fetch(`https://web-application-server.vercel.app/about/${params.id}`)
                // }
            },
            {
                path: '/edit',
                element: <Edit></Edit>,
                loader: async ({ params }) => {
                    return fetch(`https://web-application-server.vercel.app/about/${params.id}`)
                }

            }
        ]
    }
])