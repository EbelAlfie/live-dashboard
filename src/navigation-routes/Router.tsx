import { useRoutes } from "react-router-dom";
import LoginScreen from "../pages/login/Login";
import DashBoardScreen from "../pages/dashboard/Dashboard";

export default function Routes() {
    return useRoutes([
        {
            path: "/login",
            element: <LoginScreen />
        },
        {
            path: "/dashboard",
            element: <DashBoardScreen />
        }
    ])
}
