import React, { useState } from "react";
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
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState("");
    const [interests, setInterest] = useState("");
    const [pets, setPets] = useState("");
    const [budget, setBudget] = useState("");
    const [garage, setGarage] = useState("");

    
    return (
        <>
            <Card className="card bg-[#ECECDF]">
            <div className="flex flex-col gap-12 justify-center items-center w-screen min-h-screen bg-[#ECECDF]">
                <div className="text-center pt-20">
                    <CardTitle className="preferences-title"><b>Preferences</b></CardTitle>
                    <p>Add your preferences so we can match you with most compatible room mate</p>
                </div>
                <Card className="w-150 p-6 rounded-2xl bg-[#ECECDF]/40">
                    
                    <CardContent className="flex flex-col gap-4 w-full bg-[#ECECDF]/20">
                        {/* Roommates Gender Preference */}
                        <h3 className="text-sm">Roommate Gender Preference</h3>
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="gender dropdown-field w-125 text-black bg-[#ECECDF] border-3 border-black rounded-md  pl-3 pr-10 py-2 appearance-none outline-none focus:ring-0 focus:border-black">
                            <option value="">Select your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Prefer not to disclose">Prefer not to disclose</option>
                        </select>
                        

                        {/* Roommates Age */}
                        <h3 className="text-sm">Roommate Age</h3>
                        <select
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="age dropdown-field w-125 text-black bg-[#ECECDF] border-3 border-black rounded-md  pl-3 pr-10 py-2 appearance-none outline-none focus:ring-0 focus:border-black">
                            <option value="">Select age range</option>
                            <option value="18-20">18-20</option>
                            <option value="21-24">21-24</option>
                            <option value="25-30">25-30</option>
                            <option value="31-34">31-34</option>
                            <option value="35-plus">35+</option>
                        </select>

                        {/* Roommate Location */}
                        <h3 className="text-sm">House Location </h3>
                        <select
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="location dropdown-field w-125 text-black bg-[#ECECDF] border-3 border-black rounded-md  pl-3 pr-10 py-2 appearance-none outline-none focus:ring-0 focus:border-black">
                            <option value="">Select your Location</option>
                            <option value="suburb-clayton">Clayton</option>
                            <option value="suburb-huntingdale">Huntingdale</option>
                            <option value="suburb-oakleigh">Oakleigh</option>
                            <option value="suburb-murumbeena">Murumbeena</option>
                            <option value="suburb-hughesdale">Hughesdale</option>
                        </select>

                        {/* Interests */}
                        <h3 className="text-sm">Interests </h3>
                        <select
                            value={interests}
                            onChange={(e) => setInterest(e.target.value)}
                            className="dropdown-field w-125 text-black bg-[#ECECDF] border-3 border-black rounded-md  pl-3 pr-10 py-2 appearance-none outline-none focus:ring-0 focus:border-black">
                            <option value="">Select your interests</option>
                            <option value="interests-games">Games</option>
                            <option value="interests-cooking">Cooking</option>
                            <option value="interests-food">Food</option>
                            <option value="interests-photography">Photography</option>
                            <option value="interests-music">Music</option>
                            <option value="interests-dance">Dance</option>
                        </select>

                        {/* Interests */}
                        <h3 className="text-sm">Pets </h3>
                        <select
                            value={pets}
                            onChange={(e) => setPets(e.target.value)}
                            className="dropdown-field w-125 text-black bg-[#ECECDF] border-3 border-black rounded-md  pl-3 pr-10 py-2 appearance-none outline-none focus:ring-0 focus:border-black">
                            <option value="">Select your pets</option>
                            <option value="pets-cat">Cat</option>
                            <option value="pets-dog">Dog</option>
                            <option value="pets-other">Other</option>
                            <option value="pets-no-preference">No preferences</option>
                            <option value="pets-no-pets">No pets</option>
                        </select>
                        

                        {/* Budget Range */}
                        <h3 className="text-sm">Budget Range</h3>
                        <select
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            className="dropdown-field w-125 text-black bg-[#ECECDF] border-3 border-black rounded-md  pl-3 pr-10 py-2 appearance-none outline-none focus:ring-0 focus:border-black">
                            <option value="">Select your budget</option>
                            <option value="budget-200">Less than 200</option>
                            <option value="budget-200-300">200-300</option>
                            <option value="budget-300-400">300-400</option>
                            <option value="budget-400">More than 400</option>
                        </select>

                        {/* Garage Space */}
                        <h3 className="text-sm">Garage Space</h3>
                        <select
                            value={garage}
                            onChange={(e) => setGarage(e.target.value)}
                            className="dropdown-field w-125 text-black bg-[#ECECDF] border-3 border-black rounded-md  pl-3 pr-10 py-2 appearance-none outline-none focus:ring-0 focus:border-black">
                            <option value="">Select your garage space</option>
                            <option value="garage-one-car">1 car</option>
                            <option value="garage-two-car">2 cars</option>
                            <option value="garage-na">N/A</option>
                        </select>
                    </CardContent>  
                </Card>
                <div className="flex justify-center mt-6"> {/* Added wrapper div to center button */}
                                <Button className="save-button">Save Changes</Button>
                </div>
            </div> 
            </Card>
        </>
    );
};

export default ProfilePreferences;