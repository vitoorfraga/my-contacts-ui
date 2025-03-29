import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NewContact from "./pages/NewContact";
import EditContact from "./pages/EditContact";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new",
    element: <NewContact />,
  },
  { 
    path: "/edit/:id",
    element: <EditContact />,
  }
]);
