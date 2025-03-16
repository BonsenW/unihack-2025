import { Link } from "react-router-dom";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "../ui/navigation-menu";

const HomePageNavBar = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList className="flex w-screen justify-between px-40 py-20 items-center">
                {/* Left Section (Logo + Home) */}
                <div className="flex items-center gap-4">
                    <NavigationMenuItem>
                        <Link to="/home" className="gap-16 font-inter font-bold text-[24px] text-[#1F1F41] w-[216px] h-[54px] flex items-center justify-center bg-transparent rounded-full cursor-pointer">
                            <img src="../../public/logo.png" alt="Roomies Logo" />
                            Home
                        </Link>
                    </NavigationMenuItem>
                </div>

                {/* Right Section (Profile, Preferences, Notifications, Logout) */}
                <div className="flex items-center gap-4">
                    <NavigationMenuItem>
                        <Link
                            to="/profile"
                            className="font-inter font-bold text-[24px] text-[#1F1F41] w-[216px] h-[54px] flex items-center justify-center bg-transparent rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-[#1F1F41] hover:text-white"
                        >
                            My Profile
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link
                            to="/preferences"
                            className="font-inter font-bold text-[24px] text-[#1F1F41] w-[216px] h-[54px] flex items-center justify-center bg-transparent rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-[#1F1F41] hover:text-white"
                        >
                            Preferences
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link
                            to="/notifications"
                            className="font-inter font-bold text-[24px] text-[#1F1F41] w-[216px] h-[54px] flex items-center justify-center bg-transparent rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-[#1F1F41] hover:text-white"
                        >
                            Notifications
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link
                            to="/logout"
                            className="font-inter font-bold text-[24px] text-[#1F1F41] w-[216px] h-[54px] flex items-center justify-center bg-transparent rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-[#1F1F41] hover:text-white"
                        >
                            Logout
                        </Link>
                    </NavigationMenuItem>
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default HomePageNavBar;
