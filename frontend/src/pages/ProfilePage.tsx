import React from "react";
import "./ProfilePage.css";  // Your custom styles
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
    return (
        <div className="profile-body">
            <div className="flex flex-col">
                <div className="heading bg-red-400">
                    <h1>Edit Profile</h1>
                </div>
            
                <div className="text-fields bg-yellow-400">
                    <h2>Name</h2>
                    <p>This is some content for the name field.</p>
                    <h2>Age</h2>
                    <p>This is some content for the age field.</p>
                    <h2>Gender</h2>
                    <p>This is some content for the gender field.</p>
                    <h2>Email</h2>

                    <div className="dropdown">
                        <button className="dropbtn">Dropdown</button>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div>
            
                <div className="flex bg-black">
                    <Button className="buttons">Save Changes</Button>
                    <Button className="buttons">Back</Button>
                </div>

                <div className="fixed right-20 top-1/2 transform -translate-y-1/2 text-4xl">
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
