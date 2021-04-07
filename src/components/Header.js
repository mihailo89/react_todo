import React from 'react';

import { FaGithubAlt } from "react-icons/fa";

const Header = () => {
    return(
        <header className="bg-gray-900 h-6">
            <div className="h-full flex justify-center items-center">
            <FaGithubAlt className="text-white text-xl" />
            <a 
                href="https://github.com/mihailo89" 
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white ml-1 dark:text-gray-300">
                Mihailo89
            </a>
            </div>
        </header>
    )
}

export default Header;