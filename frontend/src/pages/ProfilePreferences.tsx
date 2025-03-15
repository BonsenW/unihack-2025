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
                        {/* Roommates Gender Preference */}
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
                                <DropdownMenuRadioItem value="no-preference">No preference</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                        </DropdownMenu>
                        
                        {/* Roommates Age */}
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

                        {/* House Location */}
                        <h3 className="text-sm">House Location</h3>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild className="age-dropdown bg-transparent rounded-md border border-3 border-black">
                                <Button variant="outline"></Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="w-125 bg-[#ECECDF] border border-black border-3">
                                <DropdownMenuLabel>Suburbs</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                <DropdownMenuRadioItem value="suburb-clayton">Clayton</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="suburb-huntingdale">Huntingdale</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="suburb-oakleigh">Oakleigh</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="suburb-murumbeena">Murumbeena</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="suburb-hughesdale">Hughesdale</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Interests */}
                        <h3 className="text-sm">Interests</h3>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild className="age-dropdown bg-transparent rounded-md border border-3 border-black">
                                <Button variant="outline"></Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="w-125 bg-[#ECECDF] border border-black border-3">
                                <DropdownMenuLabel>Types of Interests</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                <DropdownMenuRadioItem value="interests-games">Games</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="interests-cooking">Cooking</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="interests-food">Food</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="interests-photography">Photography</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="interests-sports">Sports</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="interests-music">Music</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="interests-music">Dance</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Pets */}
                        <h3 className="text-sm">Pets</h3>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild className="age-dropdown bg-transparent rounded-md border border-3 border-black">
                                <Button variant="outline"></Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="w-125 bg-[#ECECDF] border border-black border-3">
                                <DropdownMenuLabel>Types of pets</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                <DropdownMenuRadioItem value="pets-cat">Cat</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="pets-dog">Dog</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="pets-other">Other</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="pets-no-pref">No preference</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="pets-no-pets">No pets</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Budget Range */}
                        <h3 className="text-sm">Budget Range</h3>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild className="age-dropdown bg-transparent rounded-md border border-3 border-black">
                                <Button variant="outline"></Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="w-125 bg-[#ECECDF] border border-black border-3">
                                <DropdownMenuLabel>Range of prices</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                <DropdownMenuRadioItem value="budget-200">Less than 200</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="budget-200-300">200-300</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="budget-300-400">300-400</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="budget-400">More than 400</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                        </DropdownMenu>

                        {/* Garage Space */}
                        <h3 className="text-sm">Garage Space</h3>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild className="age-dropdown bg-transparent rounded-md border border-3 border-black">
                                <Button variant="outline"></Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="w-125 bg-[#ECECDF] border border-black border-3">
                                <DropdownMenuLabel>Garage Preferences</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                <DropdownMenuRadioItem value="garage-one-car">1 car</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="garage-two-car">2 cars</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="garage-na">N/A</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                                </DropdownMenuContent>
                        </DropdownMenu>
                    </CardContent>  
                </Card>
            </div>
        </>
    );
};

export default ProfilePreferences;