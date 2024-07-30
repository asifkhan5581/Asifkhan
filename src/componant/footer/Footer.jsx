import React from "react";
import module from "./footer.module.css";

function Footer() {
  return (
    <div className={module.footer}>
      <div className="container">
        <footer className="py-3 my-4">
          <ul
            className={`nav justify-content-center border-bottom pb-3 mb-3 ${module.links}`}
          >
            <li className="nav-item">
              <a href="#" className={`nav-link px-2 ${module.links}`}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className={`nav-link px-2 ${module.links}`}>
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className={`nav-link px-2 ${module.links}`}>
                Project
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className={`nav-link px-2 ${module.links}`}>
                Contact
              </a>
            </li>
          </ul>
          <p className="text-center">© 2024 Company, Inc</p>
          <p className="text-center">Asif Khan</p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
