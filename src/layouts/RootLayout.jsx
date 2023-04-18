import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const RootLayout = ()=>{
    return (
        <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;