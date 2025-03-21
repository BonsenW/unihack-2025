import React, { useState } from "react";
import { Button } from "@/components/ui/button" 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import "./ProfilePreferences.css";
import { postAddUser } from "@/api/api";
import { User, PostUser } from "@/api/User";

const ProfilePreferences: React.FC = () => {
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [location, setLocation] = useState("");
    const [interests, setInterest] = useState("");
    const [pets, setPets] = useState("");
    const [budget, setBudget] = useState("");
    const [garage, setGarage] = useState("");

    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(""); // Error state
    const [success, setSuccess] = useState(""); // Success message

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)

        const userData: PostUser = {
            gender: gender,
            houseLocation: location,
            ageRange: [age],
            interests: [interests],
            pets: pets,
            budgetRange: budget,
            garageSpace: garage
        }

        try {
            await postAddUser(userData); // Send data to the backend
            setSuccess("User added successfully!");
            setError(""); // Clear any previous errors
          } catch (err) {
            console.error(err)
            setError("There was an error adding the user.");
            setSuccess(""); // Clear success message
          } finally {
            setLoading(false); // Stop loading
          }
    }

    return (
        <>
            <div className="arrow-container flex justify-between items-center bg-[#ECECDF]">
                {/* Left Arrow */}
                <div className="arrow-left">
                    <Link to="/home">
                        <svg width="50px" height="50px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#000000" />
                        </svg>
                        <p className="preferences-p">Home</p>
                    </Link>
                </div>
    
                {/* Card */}
                <Card className="card bg-[#ECECDF] max-w-[800px] w-4/5 mx-4 shadow-none border-0">
                    <div className="flex flex-col gap-6 justify-center items-center w-full min-h-screen bg-[#ECECDF]">
                        <div className="text-center pt-20">
                            <CardTitle className="preferences-title"><b>Preferences</b></CardTitle>
                            <p className="preference-p text-center">Add your preferences so we can match you with most compatible roommate</p>
                        </div>
                        <Card className="w-150 p-6 rounded-2xl bg-[#ECECDF]/40 border-0 shadow-none">
                            <CardContent className="flex flex-col gap-4 w-full bg-[#ECECDF]/20">
                                <h3 className="text-sm">Roommate Gender Preference</h3>
                                <select value={gender} onChange={(e) => setGender(e.target.value)}
                                    className="dropdown-field w-125 text-black bg-[#ECECDF] border-3 border-black rounded-md pl-3 pr-10 py-2 appearance-none outline-none focus:ring-0 focus:border-black">
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
                        <div className="flex justify-center mt-6">
                            <Button onClick={handleSubmit} className="save-button">
                                {loading ? "Saving..." : "Save Changes"}
                            </Button>
                        </div>
                    </div>
                </Card>
    
                {/* Right Arrow */}
                <div className="arrow-right">
                    <Link to="/profile">
                        <svg fill="#000000" height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 330 330">
                            <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
                            c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                            C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                            C255,161.018,253.42,157.202,250.606,154.389z"/>
                        </svg>
                        <p className="preferences-p">Edit profile</p>
                    </Link>
                </div>
            </div>
        </>
    );

};

export default ProfilePreferences;