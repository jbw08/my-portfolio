import { Outlet, Link } from "react-router-dom";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
const Layout = () => {
    return (
        <>
        <div className="min-h-screen w-full flex flex-col font-mono">
            <Nav />
            <Outlet />
            <Footer />
            </div>
        </>
    )
};

export default Layout;