import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "./ProfilePage.css";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const ProfilePage: React.FC = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [location, setLocation] = useState("");
    const [email, setEmail] = useState("");


    return (
        <>
            <div className="flex flex-col gap-12 justify-center items-center w-full pb-5     bg-[#ECECDF]">
            
                <Card className="w-150 p-6 rounded-2xl bg-[#ECECDF]/40 shadow-none border-0">
                    <CardHeader className="text-center">
                            <CardTitle className="profile-title text-6xl text-[#1F1F41] align-middle pt-20"><b>Edit Profile</b></CardTitle>
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
                    <Link to="/home">
                        <Button className="save-button">Home</Button>
                    </Link>
                    <Button className="save-button">Save Changes</Button>
                </div>

            {/* Right Arrow */}
            <div className="arrow-right-profile">
                <Link to="/preferences">
                    <svg fill="#000000" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 330 330">
                        <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
                        c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                        C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                        C255,161.018,253.42,157.202,250.606,154.389z"/>
                    </svg>
                    <p className="profile-p">Edit preferences</p>
                </Link>
            </div>

            </div>
        
        </>
    );
};

export default ProfilePage;