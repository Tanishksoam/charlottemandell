import { useState } from "react";
import { motion } from "framer-motion";

interface NavLink {
  href: string;
  label: string;
}

const SideNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  // Define all the navigation links here for reusability
  const navLinks: NavLink[] = [
    { href: "/", label: "HOME" },
    { href: "/work", label: "MY WORK " },
    { href: "/essays", label: "ESSAYS" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <div className="absolute top-0 left-0 z-10 border-r-2 border-[#a5a5a555]">
      {/* Collapsed Menu (Hamburger Icon) */}
      {!isOpen && (
        <div className="w-fit md:p-4  md:h-[100vh] bg-transparent md:bg-white">
          <button
            onClick={toggleNav}
            className="p-4 focus:outline-none"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
          >
            <div className="space-y-2">
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
            </div>
          </button>
        </div>
      )}

      {/* Expanded Menu with Framer Motion */}
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-screen md:w-[400px] h-full border-r-2 border-[#a5a5a555] bg-white z-50 p-8"
        >
          <button
            onClick={toggleNav}
            className="absolute top-4 right-4 focus:outline-none"
            aria-label="Close navigation menu"
            aria-expanded={isOpen}
          >
            <span className="text-2xl">×</span>
          </button>
          <div className="w-full flex justify-between items-center">
            <div className="text-4xl font-medium text-gray-700">
              Charlotte Mandell
            </div>
          </div>
          <div className="flex flex-col items-end justify-start h-full space-y-8 text-4xl text-gray-700 py-20">
            {/* Map over navLinks array to dynamically create the links */}
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.05 }}
                className="hover:underline duration-500 transition-all ease-in-out"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
          <div className="absolute w-[90%] bottom-4 flex justify-between items-stretch left-4 text-sm text-gray-500">
            <p>Instagram</p>
            <p> © All rights reserved.</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SideNav;
