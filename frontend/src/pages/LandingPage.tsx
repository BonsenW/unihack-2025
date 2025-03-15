import "./LandingPage.css"
import React from "react";
import Spline from "@splinetool/react-spline";
import { Button } from "@/components/ui/button";
import LandingPageNavBar from "@/components/custom/LandingPageNavBar";

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen w-full bg-[#ECECDF] bg-[radial-gradient(at_18%_99%,#899cfb_0px,transparent_50%),radial-gradient(at_80%_50%,#899cfb_0px,transparent_50%)] flex flex-col">

            {/* Navbar */}
            <div className="flex-grow-0">
                <LandingPageNavBar />
            </div>

            {/* Main Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between px-8">

                {/* Left Text Section */}
                <div className="flex flex-col space-y-4 text-center lg:text-left max-w-xl">
                    <h1 className="text-8xl lg:text-9xl font-extrabold text-transparent bg-gradient-to-r from-[#1F1F41] to-[#899cfb] bg-clip-text animate-[gradientAnimation_4s_ease_infinite] leading-tight">
                        Roomies
                    </h1>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">AI Powered Matching</h2>
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                        Intuitive design <br /> Catered towards your specific needs
                    </p>
                    <Button className="px-8 py-4 text-xl font-semibold text-white bg-gradient-to-r from-[#1F1F41] to-[#899cfb] rounded-full transition-transform hover:scale-105 animate-[gradientAnimation_4s_ease_infinite]">
                        Find your soul<i>(room)</i>mate
                    </Button>
                </div>

                {/* Right Spline 3D Model Section */}
                <div className="w-full max-w-2xl lg:max-w-[600px] h-[400px] lg:h-[550px]">
                    <Spline scene="https://prod.spline.design/QWVez0kuhwarUx0V/scene.splinecode" />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
