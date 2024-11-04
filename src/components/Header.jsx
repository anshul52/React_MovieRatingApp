import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import userIcon from "../assets/user.png";
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from "../contants/navigation";
import { SiGoogledisplayandvideo360 } from "react-icons/si";

const Header = () => {
  const location = useLocation();
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
  const [searchInput, setSearchInput] = useState(removeSpace);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="fixed top-0 w-full h-16 bg-black bg-opacity-80 z-[99999]">
      <div className="container mx-auto px-3 flex items-center h-full">
        <Link to={"/"}>
          {/* <img src={logo} alt="logo" width={120} /> */}
          <h1 className="text-[20px] font-extrabold text-yellow-500 flex items-center gap-3 ">
            <SiGoogledisplayandvideo360 /> Movie Reviewer
          </h1>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 ml-5">
          {navigation.map((nav, index) => {
            return (
              <div>
                <NavLink
                  key={nav.label + "header" + index}
                  to={nav.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-100 ${
                      isActive && "text-neutral-100"
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-5">
          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            {/* <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent px-4 py-1 outline-none border-none bg-red-400 lg:block"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button className="text-2xl text-white">
              <IoSearchOutline />
            </button> */}
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block px-4 py-3 outline-none w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                placeholder="Search here..."
                required
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
              />
            </div>
          </form>
          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
            <img src={userIcon} width="w-ful h-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
