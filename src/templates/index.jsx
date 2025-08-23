import { Outlet } from "react-router";
import { Header } from "../components/molecules/Header";

export function Template() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}