import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/news",
    element: <h1>This is news</h1>,
  },
  {
    path: "*",
    element: <h1>error Adress</h1>,
  },
]);

export default router;
