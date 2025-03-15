import React from "react";
import "./HomePage.css";

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
    return (
        <>
        <div>
            <div className="relative flex justify-center items-center h-screen">
                <div className="relative w-100 h-100">
                    <h1 className="relative z-50 left-50 top-20 text-5xl text-black"><b>Lola Smith</b></h1>
                    <h2 className="relative z-50 left-50 top-20 text-black">
                    F23
                    </h2>
                    <h2 className="relative z-50 left-50 top-20 text-black">2km away from you (nearby!)</h2>
                    <p className="relative z-50 left-50 top-20 text-black">Likes <b>cooking</b>, <b>travelling</b>, and <b>F1</b></p>
                    <img
                        src="/image2.png"
                        alt="Image 2"
                        className="white-bg absolute top-0 left-40 w-100 h-100 rounded-lg shadow-lg bg-white text-white"
                    />
                    <img 
                        src="../../public/brian.png" 
                        alt="Image 1"
                        className="housemate-image absolute top-0 right-40 w-100 h-100 rounded-lg shadow-lg"
                    />
                </div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-4 pb-4">
                <button 
                    type="button" 
                    className="bg-white hover:bg-indigo-950 font-medium rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300 shadow-md"
                    >
                    ❌
                </button>
                <button 
                    type="button" 
                    className=" bg-white hover:bg-rose-400 font-medium rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300 shadow-md"
                    > ❤️
                </button>
            </div>
        </div>
        </>
    );
};

export default HomePage;
