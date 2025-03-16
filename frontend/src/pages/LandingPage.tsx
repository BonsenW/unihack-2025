import "./LandingPage.css"
import React from "react";
import Spline from "@splinetool/react-spline";
import { Button } from "@/components/ui/button";
import LandingPageNavBar from "@/components/custom/LandingPageNavBar";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen min-w-screen bg-[#ECECDF] bg-[radial-gradient(at_18%_99%,#899cfb_0px,transparent_50%),radial-gradient(at_80%_50%,#899cfb_0px,transparent_50%)] flex flex-col">

            {/* Navbar */}
            <div className="">
                <LandingPageNavBar />
            </div>

            {/* Main Section */}
            <div className="flex lg:flex-row px-40 mb-20">

                {/* Left Text Section */}
                <div className="flex flex-col gap-6 space-y text-center lg:text-left max-w-xl flex-1">
                    <h1 className="text-8xl lg:text-9xl roomies-h1">
                        Roomies
                    </h1>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900">AI Powered Matching</h2>
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                        Intuitive design <br /> Catered towards your specific needs No more endlessly searching for a place to live, <br /> And no more incompatible room mates
                    </p>
                    <Link to="/login">
                        <Button className="px-16 py-6  text-xl font-semibold text-white bg-gradient-to-r from-[#1F1F41] to-[#899cfb] rounded-full transition-transform hover:scale-105 animate-gradient">
                            Find your soul<i>(room)</i>mate
                        </Button>
                    </Link>
                </div>

                {/* Right Spline 3D Model Section */}
                <div className="ml-12">
                    <div className="spline-model-component w-[700px] h-[700px] overflow-hidden  mt-[-100px]">
                        <Spline scene="https://prod.spline.design/QWVez0kuhwarUx0V/scene.splinecode" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LandingPage;
