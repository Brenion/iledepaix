
import React from 'react';
import pagesConfig from './pagesConfig';

const NavBar = ({ title, children, currentPage }) => {
  return (
    <div className="flex flex-col">
      <header className="flex items-center m-4 p-4 bg-yellow-800 rounded-md border-2 border-yellow-800 shadow-lg">
        <img src="" alt="react image" />
        <nav>
          <ul className="flex text-2xl text-red-200 m-4">
            {pagesConfig.map((page) => (
              <li className="m-2" key={page.id}>
                
                  <a href={page.url}
                    className={
                      currentPage === `${page.currentPage}` ? 'font-bold' : undefined
                    }>
                    {page.name}
                  </a>
                
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="mx-auto">{children}</main>
    </div>
  );
};

export default NavBar;
