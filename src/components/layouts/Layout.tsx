import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <ToastContainer position="bottom-left" autoClose={2000} pauseOnHover theme="colored" />
            <Footer />
        </>
    );
}