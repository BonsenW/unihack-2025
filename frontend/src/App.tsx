import "./App.css";
import { Button } from "./components/ui/button";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
} from "./components/ui/navigation-menu";

function App() {
    return (
        <NavigationMenu className="p-4 bg-gray-100 shadow-md rounded-lg">
            <NavigationMenuList className="flex space-x-6">
                {/* Home Link */}
                <NavigationMenuItem>
                    <NavigationMenuLink href="/" className="font-medium hover:text-blue-500">
                        Home
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Profile Dropdown */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="font-medium">Profile</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-2 bg-white shadow-md rounded-lg">
                        <NavigationMenuLink href="/profile">View Profile</NavigationMenuLink>
                        <NavigationMenuLink href="/settings">Settings</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Messages */}
                <NavigationMenuItem>
                    <NavigationMenuLink href="/messages" className="font-medium hover:text-blue-500">
                        Messages
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Notifications */}
                <NavigationMenuItem>
                    <NavigationMenuLink href="/notifications" className="font-medium hover:text-blue-500">
                        Notifications
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Logout */}
                <NavigationMenuItem>
                    <NavigationMenuLink href="/logout" className="text-red-500 font-medium hover:text-red-700">
                        Log out
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

export default App;
