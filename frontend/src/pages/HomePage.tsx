import React from "react";

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
        <div>
            <div className="container mt-4">
                <div className="d-flex justify-content-center">
                    <div className="card p-3" style={{ width: "50%" }}>
                        <h2 className="text-center">Other Person</h2>
                        <div className="d-flex justify-content-center mt-3">
                            <button className="btn btn-danger mx-2">❌</button>
                            <button className="btn btn-outline-danger mx-2">❤️</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
