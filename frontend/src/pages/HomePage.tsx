import React, { useState } from "react";
import "./HomePage.css";
import HomePageNavBar from "@/components/custom/HomePageNavBar";

interface Person {
    name: string;
    age: number;
    gender: "male" | "female";
    distanceFromX: number;
    picture: string;
}

const db: Person[] = [
    { name: "Bonsen", age: 30, gender: "male", distanceFromX: 30, picture: "/tomato.jpg" },
    { name: "Yokabit", age: 3900, gender: "female", distanceFromX: 60, picture: "/heart.jpg" },
    { name: "Elsie", age: 9, gender: "female", distanceFromX: 20, picture: "/brian.png" },
];

const HomePage: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % db.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + db.length) % db.length);
    };

    const person = db[currentIndex];

    return (
        <div>
            <HomePageNavBar />

            <div className="relative flex justify-center items-center h-screen">
                <div className="relative w-100 h-100">
                    <h1 className="text-left relative z-50 left-58 top-20 text-5xl text-black ps-1.5 pe-1.5">
                        <b>{person.name}</b>
                    </h1>

                    <p className="text-left relative z-50 left-58 top-30 text-black flex items-center ps-1.5">
                        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
                        </svg>
                        <span>{person.age} years old</span>
                    </p>

                    <p className="text-left relative z-50 left-58 top-30 text-black flex items-center ps-1.5 pe-1.5">
                        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>
                        </svg>
                        <span>{person.distanceFromX}km away from you</span>
                    </p>

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
                    onClick={handlePrev}
                >
                    ❌
                </button>

                <button
                    type="button"
                    className="bg-white hover:bg-rose-400 font-medium rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-300 shadow-md"
                    onClick={handleNext}
                >
                    ❤️
                </button>
            </div>
        </div>
    );
};

export default HomePage;
