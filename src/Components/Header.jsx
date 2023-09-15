import {  ArrowLeftCircle } from "lucide-react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className='bg-transparent mx-[70px] z-10 mt-[40px]'>
        <div className='flex justify-between'>
        <NavLink to={'/'}>
        <ArrowLeftCircle className='text-zinc-500 ' />
        </NavLink>
         
          <div className='flex items-center  gap-4'>
            <NavLink
              to={"/projects"}
              className={({ isActive }) => {
                `text-sm duration-500  text-zinc-500 ${
                  isActive ? "text-zinc-300" : "text-zinc-500"
                }`;
              }}>
              <p className=' text-zinc-500 hover:text-zinc-300'>Projects</p>
            </NavLink>
            <NavLink to={"/contact"}>
              <p className='text-sm duration-500 text-zinc-500 hover:text-zinc-300'>
                Contact
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
