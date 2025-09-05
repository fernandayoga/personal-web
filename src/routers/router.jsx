import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import DetailProyek from "../pages/DetailProyek";
import { getDetailProyek } from "../apis/loader";
import ErrorPage from "../error/ErrorPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement : <ErrorPage/>
    },
    {
        path: "/proyek/:id",
        element: <DetailProyek/>,
        loader : getDetailProyek,
        errorElement : <ErrorPage/>
    }
])