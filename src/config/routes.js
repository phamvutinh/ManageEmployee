import Manage from "pages/Manage";
import Error from "pages/Error";
import Login from "pages/Login";

export default [
  {
    key: "Manage Page",
    component: Manage,
    exact: true,
    path: "/",
    private: true,
  },
  {
    key: "Login Page",
    component: Login,
    exact: true,
    path: "/login",
    private: false,
  },
  { key: "Error Page", component: Error },
];
