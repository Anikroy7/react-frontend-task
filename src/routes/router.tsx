import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PostDetailsPage from "../pages/PostDetailsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/post/:id",
        element: <PostDetailsPage />,
    },
])

export default router;