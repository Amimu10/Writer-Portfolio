

// import { useEffect, useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa"; // Import menu icons
// import { Link, NavLink } from "react-router-dom";
// import useAuth from "../../../Hooks/useAuth";

// const Navbar = () => {
//   const { user, logOut } = useAuth(); 
//   const name = user?.displayName;
//   const photo = user?.photoURL;
//   console.log(photo);
//   const [sticky, setSticky] = useState(false);
//   const [open, setOpen] = useState(false);

//   const handleLogOut = () => {
//     logOut()
//       .then(result => {
//         console.log(result.user);
//       })
//       .catch(error => {
//         console.log(error.message);
//       });
//   };

//   const menuLinks = (
//     <>
//       <li>
//         <NavLink
//           exact
//           to="/"
//           className={({ isActive }) =>
//             `lg:text-[20px] text-[18px] font-inter px-4 py-2 transition-colors duration-300 rounded ${
//               isActive ? "text-primary" : "text-black hover:text-primary"
//             }`
//           }
//         >
//           HOME
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/about"
//           className={({ isActive }) =>
//             `lg:text-[20px] text-[18px] font-inter px-4 py-2 transition-colors duration-300 rounded ${
//               isActive ? "text-primary" : "text-black hover:text-primary"
//             }`
//           }
//         >
//           ABOUT
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/posts"
//           className={({ isActive }) =>
//             `lg:text-[20px] text-[18px] font-inter px-4 py-2 transition-colors duration-300 rounded ${
//               isActive ? "text-primary" : "text-black hover:text-primary"
//             }`
//           }
//         >
//           POSTS
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/contact"
//           className={({ isActive }) =>
//             `lg:text-[20px] text-[18px] font-inter px-4 py-2 transition-colors duration-300 rounded ${
//               isActive ? "text-primary" : "text-black hover:text-primary"
//             }`
//           }
//         >
//           CONTACT
//         </NavLink>
//       </li>
//       {user?.email ? (
//         <>
//           {name && photo && (
//             <div className="flex items-center">
//               <p className="font-inter text-base rounded-md font-semibold text-primary mr-2">{name}</p>
//               <img
//                 src={photo}
//                 className="inline items-center mr-3 h-10 w-10 rounded-full"
//                 alt={name}
//               />
//             </div>
//           )}
//           <li>
//             <Link>
//               <button
//                 className="border border-1 border-black hover:bg-primary hover:bg-none px-6 py-2 hover:text-white hover:border-none text-[18px]"
//                 onClick={handleLogOut}
//               >
//                 LOGOUT
//               </button>
//             </Link>
//           </li>
//         </>
//       ) : (
//         <li>
//           <Link
//             className="border border-1 border-black hover:bg-primary hover:border-none px-4 py-2 hover:text-white text-[18px]"
//             to="/login"
//           >
//             Login
//           </Link>
//         </li>
//       )}
//     </>
//   );

//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-white/60 text-gray-900" : "text-white"}`}>
//       <div className="flex items-center justify-between">
//         <div className="mx-7">
//           <h4 className="text-4xl uppercase font-bold">
//             A<span className="text-cyan-600">le</span>x
//           </h4>
//         </div>

//         {/* Desktop Menu */}
//         <div className={`text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full ${sticky ? "bg-[#EEB523]" : "bg-white"}`}>
//           <ul className="flex items-center gap-1 py-2 text-lg">
//             {menuLinks}
//           </ul>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div
//           onClick={() => setOpen(!open)}
//           className={`z-[999] ${open ? "text-gray-900" : "text-gray-100"} text-3xl md:hidden m-5`}
//         >
//           {open ? <FaTimes className="text-[32px] text-primary"/> : <FaBars />}
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`md:hidden text-gray-900 absolute w-2/5 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? "right-0" : "right-[-100%]"}`}
//         >
//           <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
//             {menuLinks}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import menu icons
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const name = user?.displayName; // Fetch the user's name
  const photo = user?.photoURL; // Fetch the user's photo URL
  console.log(photo); // Debugging: Log the photo URL
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

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
        >
          POSTS
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
      {user?.email ? (
        <>
          {name && photo && (
            <div className="flex items-center">
              <p className="font-inter text-base rounded-md font-semibold text-primary mr-2">{name}</p>
              <img
                src={photo}
                className="inline items-center mr-3 h-10 w-10 rounded-full"
                alt={name}
              />
            </div>
          )}
          <li>
            <Link className={({ isActive }) =>
            `lg:text-[20px] text-[18px] font-inter px-4 py-2 transition-colors duration-300 rounded ${
              isActive ? "text-primary" : "text-black hover:text-primary"
            }`
          }  to="/dashboard">
                Dashboard
            </Link>
          </li>
          <li>
            <Link>
              <button
                className="border border-1 border-black hover:bg-primary hover:bg-none px-6 py-2 hover:text-white hover:border-none text-[18px]"
                onClick={handleLogOut}
              >
                LOGOUT
              </button>
            </Link>
          </li>
        </>
      ) : (
        <li>
          <Link
            className="border border-1 border-black hover:bg-primary hover:border-none px-4 py-2 hover:text-white text-[18px]"
            to="/login"
          >
            Login
          </Link>
        </li>
      )}
    </>
  );

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "bg-white/60 text-gray-900" : "text-white"}`}>
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            A<span className="text-cyan-600">le</span>x
          </h4>
        </div>

        {/* Desktop Menu */}
        <div className={`text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full ${sticky ? "bg-[#EEB523]" : "bg-white"}`}>
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${open ? "text-gray-900" : "text-gray-100"} text-3xl md:hidden m-5`}
        >
          {open ? <FaTimes className="text-[32px] text-primary"/> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden text-gray-900 absolute w-2/5 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? "right-0" : "right-[-100%]"}`}
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
