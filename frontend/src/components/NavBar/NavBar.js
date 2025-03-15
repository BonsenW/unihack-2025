import React from "react";

const Navbar = ({ brand = "Housemate Finder", links = [], buttons = [] }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{brand}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {links.map((link, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={link.href}>{link.label}</a>
              </li>
            ))}
            {buttons.map((button, index) => (
              <li className="nav-item" key={index}>
                <a className={`btn ${button.className} ms-3`} href={button.href}>
                  {button.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;