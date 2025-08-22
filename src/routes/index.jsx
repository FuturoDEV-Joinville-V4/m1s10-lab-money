import { createBrowserRouter } from "react-router"
import { LoginPage } from "../pages/Login"
import { DashboardPage } from "../pages/Dashboard"
import { Perfil } from "../pages/Perfil"
import { Template } from "../templates"

export const routes = createBrowserRouter([
    {
        path: "/",
        Component: LoginPage,
    },
    {
        path: "/dashboard",
        Component: Template,
        children: [
            {
                index: true,
                // path: "/dashboard", // /dashboard/dashboard
                Component: DashboardPage,
            },
            {
                path: "profile",
                Component: Perfil,
            }
        ]
    }
    
])