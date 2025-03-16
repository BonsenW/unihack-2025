import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "./ProfilePage.css";
import { Button } from "@/components/ui/button";

const ProfilePage: React.FC = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [location, setLocation] = useState("");
    const [email, setEmail] = useState("");

    return (
        <>
            <div className="flex flex-col gap-12 justify-center items-center w-screen h-screen bg-[#ECECDF]">
            
                <Card className="w-150 p-6 rounded-2xl bg-[#ECECDF]/40">
                    <CardHeader className="text-center">
                            <CardTitle className="profile-title text-6xl text-[#1F1F41] align-middle"><b>Edit Profile</b></CardTitle>
                    </CardHeader>
                    

                    <CardContent className="flex flex-col gap-4 w-full bg-[#ECECDF]/20">

                        {/* Name */}
                        <h3 className="text-sm">Name</h3>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="input-field w-125 text-[gray] bg-[#ECECDF] border-2 border-black rounded-md  pl-3 pr-10 py-2 appearance-none">
                                
                            </input>
    

                        {/* Age */}
                        <h3 className="text-sm">Age</h3>
                        <select
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="dropdown-field w-125 text-[gray] bg-[#ECECDF] border-2 border-black rounded-md  pl-3 pr-10 py-2 appearance-none">
                            <option value="">Select your age</option>
                            <option value="18-20">18-20</option>
                            <option value="21-24">21-24</option>
                            <option value="25-30">25-30</option>
                            <option value="31-34">31-34</option>
                            <option value="35-plus">35+</option>
                        </select>

                        {/* Gender  */}
                        <h3 className="text-sm">Gender</h3>
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="dropdown-field w-125 text-[gray] bg-[#ECECDF] border-2 border-black rounded-md  pl-3 pr-10 py-2 appearance-none">
                            <option value="">Select your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Prefer not to disclose">Prefer not to disclose</option>
                        </select>


                        {/* Location */}
                        <h3 className="text-sm">Location</h3>
                        <select
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="dropdown-field w-125 text-[gray] bg-[#ECECDF] border-2 border-black rounded-md  pl-3 pr-10 py-2 appearance-none">
                            <option value="">Select your Location</option>
                            <option value="suburb-clayton">Clayton</option>
                            <option value="suburb-huntingdale">Huntingdale</option>
                            <option value="suburb-oakleigh">Oakleigh</option>
                            <option value="suburb-murumbeena">Murumbeena</option>
                            <option value="suburb-hughesdale">Hughesdale</option>
                        
                        </select>

                        {/* Email */}
                        <h3 className="text-sm">Email Address</h3>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="input-field w-125 text-[gray] bg-[#ECECDF] border-2 border-black rounded-md  pl-3 pr-10 py-2 appearance-none">
                                
                            </input>
                        

                    </CardContent>  
                </Card>
                    <div className="flex justify-center mt-6">
                        <Button className="save-button">Save Changes</Button>
                    </div>
            </div>
        </>
    );
};

export default ProfilePage;