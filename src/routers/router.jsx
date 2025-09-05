import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import DetailProyek from "../pages/DetailProyek";
import { getDetailProyek } from "../apis/loader";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/proyek/:id",
        element: <DetailProyek/>,
        loader : getDetailProyek
    }
])