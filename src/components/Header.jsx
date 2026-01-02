import { useState, useEffect, useRef } from "react";
import { navLinks } from "../data/constant";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import brandLogo from "../data/constant";

const Header = () => {
  const [change, setChange] = useState(false);
  const [scroll, setScroll] = useState(false);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setChange(false);
      }
    };

    if (change) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.addEventListener("mousedown", handleOutsideClick);
    };
  }, [change]);

  return (
    <div
      className={`py-1 fixed w-full z-20 ${
        scroll
          ? "bg-gradient-to-r from-green-500 to-emerald-400  shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center mx-10">
        <div className="text-white font-bold xl:w-36 w-20 md:w-28">
          <img src={brandLogo} alt="" />
        </div>
        <nav>
          <ul className="hidden lg:flex justify-center xl:text-xl xl:gap-8 items-center cursor-pointer text-white text-lg gap-5">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="hover:text-emerald-200 hover:scale-125 transition-all ease-in-out duration-500"
              >
                <Link
                  to={link.href}
                  smooth={true}
                  duration={800}
                  offset={-70}
                  spy={true}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p
          ref={buttonRef}
          onClick={() => setChange(!change)}
          className="text-emerald-500 text-xl bg-white text-center my-2 px-2 py-2 z-20 rounded-full cursor-pointer lg:hidden"
        >
          {change ? <FaTimes /> : <FaBars />}
        </p>

        <ul
          ref={menuRef}
          className={`lg:hidden flex flex-col top-0 items-center gap-6 bg-green-700 rounded-b-lg shadow-md text-white py-4 w-full absolute left-0 transition-all duration-700 ease-in-out ${
            change
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          {" "}
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="hover:text-emerald-200 transition-all duration-700 ease-in-out cursor-pointer hover:scale-125 text-lg"
            >
              <Link
                to={link.href}
                smooth={true}
                duration={800}
                offset={-70}
                spy={true}
                onClick={() => setChange(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
