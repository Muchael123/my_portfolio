// import React from 'react'
import { Theme } from '../../context/ThemeContext';

function HeaderLinks({theme}: any) {
    const links = [
        { name: 'home', link: '#Home' },
        { name: 'about', link: '#about' },
        { name: 'Experience', link: '#experience' },
        { name: 'projects', link: '#projects' },
        { name: 'Qualifications', link: '#qualifications' },
        {name: 'contact', link: '#contact'}
    ]
  return (
    <div className={`lg:flex hidden space-x-3 text-gray-800 divide-x-2 ${theme === Theme.Dark ? 'text-gray-200 ': ''}`}>
      {links.map(
        (
          { name, link } // Corrected destructuring
        ) => (
          <a
            key={link}
            href={link}
            className="hover:text-green-500 px-1 text-sm font-semibold uppercase  transition duration-200"
            aria-label={name}
          >
            {name}
          </a>
        )
      )}
    </div>
  );
}

export default HeaderLinks