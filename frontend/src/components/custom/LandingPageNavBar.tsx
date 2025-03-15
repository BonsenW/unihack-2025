import "./LandingPageNavBar.css";
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
            <NavigationMenuList className="flex w-screen justify-between px-28 py-8 items-center">
                {/* Left Section (Logo + Brand Name) */}
                <div className="flex items-center gap-4">
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/" className="navbar-btn flex items-center justify-center">
                                <Star size={24} className="mr-2 text-primary" />
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/" className="navbar-btn">Roomies</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </div>

                {/* Right Section (Links) */}
                <div className="flex items-center gap-4">
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/about" className="navbar-btn">About Us</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link to="/contact" className="navbar-btn">Contact</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default LandingPageNavBar;
