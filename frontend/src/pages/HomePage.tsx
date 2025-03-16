import React from "react";
import "./HomePage.css";
import HomePageNavBar from "@/components/custom/HomePageNavBar";

// Define a TypeScript interface for the database entries
interface Person {
    name: string;
    age: number;
    gender: "male" | "female";
    distanceFromX: number; // Renamed to camelCase
    picture: string;
}

// Database array with proper typing
const db: Person[] = [
    {
        name: "Bonsen",
        age: 30,
        gender: "male",
        distanceFromX: 30, // Fixed key
        picture: "/brian.png", // Corrected image path
    },
    {
        name: "Yokabit",
        age: 3900,
        gender: "female",
        distanceFromX: 60, // Fixed key
        picture: "/brian.png",
    },
    {
        name: "Elsie",
        age: 9,
        gender: "female",
        distanceFromX: 20, // Fixed key
        picture: "/brian.png",
    },
];

const HomePage: React.FC = () => {
    // For simplicity, let's assume we're displaying the first person in the database
    const person = db[0];

    return (
        <div>
            <HomePageNavBar />

            {/* Main Content */}
            <div className="relative flex justify-center items-center h-screen">
                <div className="relative w-100 h-100">
                    {/* Name */}
                    <h1 className="text-left relative z-50 left-58 top-20 text-5xl text-black ps-1.5 pe-1.5">
                        <b>{person.name}</b>
                    </h1>

                    {/* Information */}
                    <p className="text-left relative z-50 left-58 top-30 text-black flex items-center ps-1.5">
                        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
                        </svg>
                        <span>{person.age} years old</span>
                    </p>

                    <p className="text-left relative z-50 left-58 top-30 text-black flex items-center ps-1.5 pe-1.5">
                        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>
                        </svg>
                        <span>{person.distanceFromX}km away from you</span>
                    </p>

                    <p className="text-left relative z-50 left-58 top-30 text-black flex items-center ps-1.5 pe-1.5">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M20.1818 9.36364H14.4455L15.3091 5.20909L15.3364 4.91818C15.3364 4.54545 15.1818 4.2 14.9364 3.95455L13.9727 3L7.99091 8.99091C7.65455 9.31818 7.45455 9.77273 7.45455 10.2727V19.3636C7.45455 20.3636 8.27273 21.1818 9.27273 21.1818H17.4545C18.2091 21.1818 18.8545 20.7273 19.1273 20.0727L21.8727 13.6636C21.9545 13.4545 22 13.2364 22 13V11.1818C22 10.1818 21.1818 9.36364 20.1818 9.36364ZM20.1818 13L17.4545 19.3636H9.27273V10.2727L13.2182 6.32728L12.2091 11.1818H20.1818V13ZM5.63636 10.2727H2V21.1818H5.63636V10.2727Z" fill="#000000" />
                        </svg>
                        <span>Likes <b>cooking</b>, <b>travelling</b>, and <b>F1</b></span>
                    </p>

                    {/* Overlay Image Section */}
                    <img
                        src="/image2.png"
                        alt="Image 2"
                        className="white-bg absolute top-0 left-40 w-150 h-100 rounded-lg shadow-lg bg-white text-white"
                    />

                    <img
                        src={person.picture}
                        alt="Housemate"
                        className="housemate-image absolute top-0 right-49 w-100 h-100 rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Bottom Buttons */}
            <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 flex space-x-4 pb-4">
                <button
                    type="button"
                    className="bg-white hover:bg-indigo-950 font-medium rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300 shadow-md"
                >
                    ❌
                </button>

                <button
                    type="button"
                    className="bg-white hover:bg-rose-400 font-medium rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300 shadow-md"
                >
                    ❤️
                </button>
            </div>
        </div>
    );
};

export default HomePage;