import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <svg width="550" height="80" viewBox="0 0 550 80">
              <path
                d="M45,15 c-5,0 -10,5 -12,12 c-2,15 10,25 5,40 c-2,5 -8,5 -10,10 c5,5 15,2 20,-5 c10,-15 25,-10 20,-30 c-2,-10 -15,-10 -18,-20 c-2,-5 5,-7 5,-7"
                fill="#003366"
                opacity="0.12"
              />
              <text
                x="25"
                y="48"
                fontFamily="Times New Roman"
                fontSize="38"
                fill="#003366"
                fontStyle="italic"
              >
                f(x)
              </text>

              <line
                x1="105"
                y1="15"
                x2="105"
                y2="65"
                stroke="#FFD700"
                strokeWidth="2"
              />

              <text
                x="125"
                y="38"
                fontFamily="Segoe UI"
                fontSize="24"
                fill="#003366"
                fontWeight="800"
              >
                Tharollo Consulting Services
              </text>

              <text
                x="125"
                y="60"
                fontFamily="Segoe UI"
                fontSize="14"
                fill="#666"
                fontStyle="italic"
              >
                ...where x = Strategic Advisory for Modern Enterprises
              </text>
            </svg>
          </a>
        </div>

        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>

          <li className="dropdown">
            <a className="dropbtn">Expertise</a>
            <div className="dropdown-content">
              <a href="/management">Management Consulting</a>
              <a href="/technology">Technology Consulting</a>
              <a href="/engineering">Engineering Consulting</a>
            </div>
          </li>

          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
