import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export function DefaultLayout() {
    return (
        <div className="max-w-4xl h-screen mx-auto my-16 p-8 bg-cinza-700 rounded-xl">
            <Header />
            <Outlet />
        </div>
    )
}