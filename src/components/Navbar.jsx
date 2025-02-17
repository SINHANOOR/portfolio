"use client";


import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";

const menuItems = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "project",
    label: "Portfolio",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
  return getMenuItems.map((item) => (
    <LinkScroll
      key={item.id}
      activeClass="active"
      to={item.id}
      spy={true}
      smooth={true}
      duration={1000}
      onSetActive={() => setActiveLink(item.id)}
      className={`  px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative
        ${
          activeLink === item.id
            ? "  text-green-main animation-active "
            : "text-[#000]  font-bold hover:text-green-main"
        }
        `}
      style={{ borderBottom: activeLink === item.id ? "2px solid #34D399" : "none" }}
    >
      {item.label}
    </LinkScroll>
  ));
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.screenY > 20);
    });
  }, []);

  const scrollToHome = () => {
    scroller.scrollTo("home", {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-white transition-all ${
          scrollActive ? "shadow-md pt-0" : "pt-4"
        }`}
      >
        <nav className=" bg-white max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4  ">
          <div className="col-start-1 col-end-2 flex items-center ">
            <div
              onClick={scrollToHome}
              className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-green-main"
            >
              <div className="w-[40px] h-[40px] flex justify-center items-center p-4 px-16 rounded-[8px] border-green-main bg-green-main">
                <span className="text-black text-[30px] font-bold">Sinhanoor</span>
              </div>
            </div>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-[#000]  items-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-center items-center">
            <button
              onClick={() =>
                scroller.scrollTo("contact", {
                  duration: 1500,
                  delay: 100,
                  smooth: true,
                })
              }
              className="py-3 px-6 border-[2px] bg-green-400 border-green-main hover:bg-orange-400 text-white font-semibold rounded-lg text-xl tracking-widest hover:shadow-green-md transition-all outline-none"
            >
              Contact Me
            </button>
          </div>
        </nav>
      </header>
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3">
          <ul className="bg-white overflow-x-auto flex w-full justify-between items-center text-[#000]">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
        </div>
      </nav>
    </>
  );
}
