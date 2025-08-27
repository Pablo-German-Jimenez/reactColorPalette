import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BBoyLinkinStyleNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid d-flex justify-content-center">
        {/* Brand con estilo */}
        <a className="navbar-brand neon-text" href="#">
          🎨 Color Palette
        </a>
      {/* Estilo neón inline para modularidad */}
      <style>{`
        .neon-text {
          color: #fff;
          text-shadow:
            0 0 5px #00f6ff,
            0 0 10px #00f6ff,
            0 0 20px #00f6ff,
            0 0 40px #00f6ff;
          transition: text-shadow 0.3s ease-in-out;
        }

        .neon-text:hover {
          text-shadow:
            0 0 10px #ff00cc,
            0 0 20px #ff00cc,
            0 0 40px #ff00cc,
            0 0 80px #ff00cc;
        }
      `}</style>
      </div>
    </nav>
  );
};

export default BBoyLinkinStyleNavBar;
