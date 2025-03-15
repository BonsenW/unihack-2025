import React from "react";
import { Button } from "@/components/ui/button" 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import "./ProfilePreferences.css";

const ProfilePreferences: React.FC = () => {
    const [position, setPosition] = React.useState("bottom")

    return (
        <>
            <div className="flex flex-col gap-12 justify-center items-center w-screen h-screen bg-[#ECECDF]">
                <Card className="w-150 p-6 rounded-2xl bg-[#ECECDF]/40">
                    <CardHeader className="text-center">
                        <CardTitle className="preferences-title text-3xl text-[#1F1F41]"><b>Preferences</b></CardTitle>
                    </CardHeader>
                    
                    <CardContent className="flex flex-col gap-4 w-full bg-[#ECECDF]/20">
                        <h3 className="text-sm">Roommate Gender Preference</h3>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild className="age-dropdown bg-transparent rounded-md border border-3 border-black">
                                <Button variant="outline"></Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="w-125 bg-[#ECECDF] border border-black border-3">
                                <DropdownMenuLabel>Gender</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                <DropdownMenuRadioItem value="male-preference">Male</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="female-preference">Female</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="no-preference">No Preference</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                        </DropdownMenu>
                        
                        <h3 className="text-sm">Roommate Age</h3>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild className="age-dropdown bg-transparent rounded-md border border-3 border-black">
                                <Button variant="outline"></Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="w-125 bg-[#ECECDF] border border-black border-3">
                                <DropdownMenuLabel>Age Range</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                <DropdownMenuRadioItem value="18-20">18-20</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="21-24">21-24</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="25-30">25-30</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="31-34">31-34</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="35-plus">35+</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                        </DropdownMenu>

                        <h3 className="text-sm">House Location</h3>
                        <input
                            className="roommate-age text-sm bg-transparent rounded-md h-10 p-2 border border-3 border-black focus:outline-none focus:ring-2 focus:ring-[#000000]"
                            type="text"
                        />
                    </CardContent>  
                </Card>
            </div>
        </>
    );
};

export default ProfilePreferences;