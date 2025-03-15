import React from "react";
import Navbar from "../components/NavBar/NavBar";

const db = [
    {
        "name": "Bonsen",
        "age": 30,
        "gender": "male",
        "distance from x (km)": 30, // I hate ths
        "picture": "../public/brian.png",
    },
    {
        "name": "Yokabit",
        "age": 3900,
        "gender": "female",
        "distance from x (km)": 60, // I hate ths
        "picture": "../public/brian.png",
    },
    {
        "name": "Elsie",
        "age": 9,
        "gender": "female",
        "distance from x (km)": 20, // I hate ths
        "picture": "../public/brian.png",
    },
    
]

function HomePage() {
  return (
    <div>
      <Navbar 
        brand="Housemates"
        links={[
          { label: "Profile", href: "/profile" },
          { label: "Messages", href: "/messages" },
          { label: "Notifications", href: "/notifications" }
        ]}
        buttons={[
          { label: "Log out", href: "/logout", className: "btn-light" }
        ]}
      />
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
}

export default HomePage;
