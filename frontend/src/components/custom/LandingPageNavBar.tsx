import { Link } from "react-router-dom";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "../ui/navigation-menu";
import { Star } from "lucide-react";

const LandingPageNavBar = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList className="flex w-screen justify-between px-40 py-20 items-center">
                {/* Left Section (Logo + Brand Name) */}
                <div className="flex items-center gap-4">
                    <NavigationMenuItem>
                        <Link to="/" className="gap-16 font-inter font-bold text-[24px] text-[#1F1F41] w-[216px] h-[54px] flex items-center justify-center bg-transparent rounded-full cursor-pointer">
                            <img src="../../public/logo.png" alt="Roomies Logo" />
                            Home
                        </Link>
                    </NavigationMenuItem>
                </div>

                {/* Right Section (Links) */}
                <div className="flex items-center gap-4">
                    <NavigationMenuItem>
                        <Link
                            to="/about"
                            className="font-inter font-bold text-[24px] text-[#1F1F41] w-[216px] h-[54px] flex items-center justify-center bg-transparent rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-[#1F1F41] hover:text-white"
                        >
                            About Us
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link
                            to="/contact"
                            className="font-inter font-bold text-[24px] text-[#1F1F41] w-[216px] h-[54px] flex items-center justify-center bg-transparent rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-[#1F1F41] hover:text-white"
                        >
                            Contact
                        </Link>
                    </NavigationMenuItem>
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default LandingPageNavBar;
