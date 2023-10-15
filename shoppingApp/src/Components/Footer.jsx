import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Import the specific icons you need

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white flex flex-row justify-between  mt-1 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; Made by - Rajnish Singh , 2023 </p>
        <div className="social-links">
          <a
            href="https://github.com/rajnishxoxo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-2xl hover:text-blue-600 mx-2"
          >
            <FontAwesomeIcon icon={faGithub} /> 
          </a>
          <a
            href="https://www.linkedin.com/in/rajnish-singh-5463b2280/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-2xl hover:text-blue-600 mx-2"
          >
            <FontAwesomeIcon icon={faLinkedin} /> 
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
