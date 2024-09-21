
// import { NavLink } from "react-router-dom";
// const Navbar = () => {

// const navItems = (
//   <>
//     <li>
//       <NavLink
//         exact
//         to="/"
//         className={({ isActive }) =>
//           `lg:text-[20px] font-semibold font-inter text-white px-4 py-2 transition-colors duration-300 rounded ${
//             isActive ? "bg-primary text-white" : "hover:bg-primary hover:text-white"
//           }`
//         }
//       >
//         HOME
//       </NavLink>
//     </li>
//     <li>
//       <NavLink
//         to="/about"
//         className={({ isActive }) =>
//           `lg:text-[20px] font-semibold font-inter text-white px-4 py-2 transition-colors duration-300 rounded ${
//             isActive ? "bg-primary text-white" : "hover:bg-primary hover:text-white"
//           }`
//         }
//       >
//         ABOUT
//       </NavLink>
//     </li>
//     <li>
//       <NavLink
//         to="/posts"
//         className={({ isActive }) =>
//           `lg:text-[20px] font-semibold font-inter text-white px-4 py-2 transition-colors duration-300 rounded ${
//             isActive ? "bg-primary text-white" : "hover:bg-primary hover:text-white"
//           }`
//         }
//       >
//         POSTS
//       </NavLink>
//     </li>
//     <li>
//       <NavLink
//         to="/contact"
//         className={({ isActive }) =>
//           `lg:text-[20px] font-semibold font-inter text-white px-4 py-2 transition-colors duration-300 rounded ${
//             isActive ? "bg-primary text-white" : "hover:bg-primary hover:text-white"
//           }`
//         }
//       >
//         CONTACT
//       </NavLink>
//     </li>
//   </>
// );

  

//     return (
//         <div className="navbar fixed z-10 text-white mx-auto px-5 bg-black bg-opacity-40 w-full">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16" />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
//              {navItems}
//             </ul>
//           </div>
//           <a className="btn btn-ghost text-xl">daisyUI</a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             {navItems}
//           </ul>
//         </div>
//         <div className="navbar-end">
//           <a className="btn">Button</a>
//         </div>
//       </div>
//     );
// };

// export default Navbar;


import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import menu icons
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = (
      <>
       
    <li>
    <NavLink
  exact
  to="/"
  className={({ isActive }) =>
    `lg:text-[20px] text-[18px] font-inter px-4 py-2 transition-colors duration-300 rounded ${
      isActive ? "text-primary" : "text-black hover:text-primary"
    }`
  }
>
  HOME
</NavLink>

    </li>
    <li>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `lg:text-[20px] text-[18px] font-inter px-4 py-2 transition-colors duration-300 rounded ${
            isActive ? "text-primary" : "text-black hover:text-primary"
          }`
        }
      >
         ABOUT
     </NavLink>
    </li>
    <li>
      <NavLink
        to="/posts"
        className={({ isActive }) =>
          `lg:text-[20px] text-[18px] font-inter px-4 py-2 transition-colors duration-300 rounded ${
            isActive ? "text-primary" : "text-black hover:text-primary"
          }`
        }
      > POSTS
      </NavLink>
     </li>
   <li>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `lg:text-[20px] text-[18px] font-inter px-4 py-2 transition-colors duration-300 rounded ${
            isActive ? "text-primary" : "text-black hover:text-primary"
          }`
        }
     >
        CONTACT
      </NavLink>
    </li> 
   </>
      
      
  )

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/60  text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            A<span className="text-cyan-600">le</span>x
          </h4>
        </div>

        {/* Desktop Menu */}
        <div
          className={`${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
          {open ? <FaTimes className="text-[32px] text-primary"/> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden text-gray-900 absolute w-2/5 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
           {menuLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
