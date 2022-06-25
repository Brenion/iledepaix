
import React from 'react';
import { NavLink } from 'react-router-dom';
import pagesConfig from './pagesConfig';

const NavBar = ({ title, children, currentPage }) => {
  return (
    <div>
      <header className="flex p-4 bg-[#efdddc]">
        
        <nav className="flex justify-around font-bold w-full">
           
          <div className="flex items-center">
            <a href="/">
            <img src="public/saucisse.png" alt="ile de paix" />
            </a>
          <ul className="flex text-xl m-4 items-center ">
            {pagesConfig.map((page) => (
              <li className="m-2 text-[#b27d71] duration-200 hover:text-black" key={page.id}>
                <NavLink to="/Page">
                  
                    {page.name}
                 </NavLink>
                
              </li>
            ))}
          </ul>
          </div> 
         <div>
          <ul className="flex text-xl m-4 items-center">
             <li className="m-2 py-2 px-6 bg-[#b27d71] text-white rounded-3xl " >   
                  <a href="/">
                   faire un don
                  </a>     
            </li>
              <li className="m-2 text-[#b27d71] duration:200 hover:text-black" > 
             
                  <NavLink to="/FormConnect" >
                   Connection
                 </NavLink>
             
              </li>
            </ul>
          </div> 
        </nav>
      </header>
      <main className="mx-auto">{children}</main>
    </div>
  );
};

export default NavBar;
