import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import menu icons
import { NavLink } from "react-router-dom";

const Dashboard = () => {
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
              isActive ? "text-primary" : "text-white hover:text-primary"
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
              isActive ? "text-primary" : "text-white hover:text-primary"
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
              isActive ? "text-primary" : "text-white hover:text-primary"
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
              isActive ? "text-primary" : "text-white hover:text-primary"
            }`
          }
        >
          CONTACT
        </NavLink>
      </li>
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
    <div className="flex">
      {/* Sidebar */}
{/* Sidebar */}
<aside className={`fixed top-0 left-0 w-64 bg-primary h-screen shadow-lg transition-transform ${open ? "translate-x-0" : "-translate-x-full"} md:hidden lg:translate-x-0 lg:block`}>
  <div className="p-4">
    <h2 className="text-lg font-inter font-bold text-white">Dashboard</h2>
    <ul className="flex flex-col mt-4 text-white">
      {menuLinks}
    </ul>
  </div>
</aside>


      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-primary text-white w-52  z-50 transition-transform ${open ? "translate-x-0" : "translate-x-[-100%]"}`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-2xl font-bold">Welcome to Dashboard</h2>
          {/* <FaTimes onClick={() => setOpen(false)} className="text-3xl cursor-pointer" /> */}
        </div>
        <ul className="flex flex-col items-start p-4 mt-8">
          {menuLinks}
        </ul>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-54 p-8">
        <div className={`flex items-center justify-between ${sticky ? "bg-white/60" : "bg-transparent"}`}>
          <h1 className="text-4xl">Dashboard</h1>
          {/* Mobile Menu Toggle */}
          <div
            onClick={() => setOpen(!open)}
            className={`z-[999] text-3xl lg:hidden`}
          >
            {open ? <FaTimes className="text-[32px] text-primary"/> : <FaBars />}
          </div>
        </div>
        <div className="mt-8 lg:px-6 lg:pl-72 px-4">
          {/* Your dashboard content goes here */}
          <p>This is the main dashboard content.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ex esse a iusto quorem porro? Recusandae rerum natus sequi commodi, cumque minus corrupti pariatur ratione!</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
