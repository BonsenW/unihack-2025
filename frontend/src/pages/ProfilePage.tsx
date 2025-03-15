import React from "react";
import "./ProfilePage.css";  // Your custom styles
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
    return (
        <div className="profile-body">
            <div className="flex flex-col space-y-6"> {/* Increased spacing between rows */}

                <div className="heading">
                    <h1>Edit Profile</h1>
                </div>
            
                <div className="text-fields">
                    <h2>Name</h2>
                    <p>This is some content for the name field.</p>
                    <h2>Age</h2>
                    <p>This is some content for the age field.</p>
                    <h2>Gender</h2>
                    <p>This is some content for the gender field.</p>
                    <h2>Email</h2>
                    <p>This is some content for the email field.</p>
                </div>
            
                <div className="flex">
                    <Button className="buttons">Save Changes</Button>
                    <Button className="buttons">Back</Button>
                </div>
            
            </div>
        </div>
    );
};

export default ProfilePage;
