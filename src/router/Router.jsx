import { createBrowserRouter } from "react-router-dom"
import Error404 from "../components/pages/Error404"
import Home from "../components/Home"

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />
  }
])

export default Router