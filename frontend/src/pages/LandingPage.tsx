import React from "react";
import Spline from '@splinetool/react-spline';  // Import Spline component
import "./LandingPage.css";  // Your custom styles
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
    return (
        <>
            <nav className="navbar">
                <button className="navbar-btn">About us</button>
                <button className="navbar-btn">Contact</button>
            </nav>

            <div className="flex justify-between">
                <div className="flex flex-col pt-32">
                    <h1>Roomies</h1>
                    <h2>AI Powered matching idk...</h2>
                    <p>Intuitive design <br />Catered towards your specific needs</p>
                    <Button className="ykbutton">Find your soul<i>(room)</i>mate</Button>
                </div>
                <div className="spline-container">
                    <Spline scene="https://prod.spline.design/QWVez0kuhwarUx0V/scene.splinecode" />
                </div>
            </div>
            {/* Spline Viewer Component */}

        </>
    );
};

export default Navbar;



