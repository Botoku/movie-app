"use client";
import Link from "next/link";
import { useState } from "react";
import { Plus, Search, Menu, X } from "react-feather";
import Image from "next/image";
import Logo from "../public/logo.svg";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeDesktopSearch, setActiveDesktopSearch] = useState(false);
  // activeMenu ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible"

  return (
    <section className="border-black relative bg-darkBlue text-white p-5">
      <div className="md:hidden">
        <div className={`flex justify-between p-3`}>
          <Menu onClick={() => setActiveMenu(!activeMenu)} />
          <div className={`${activeSearch ? "visible" : "hidden"}`}>
            <input
              type="text"
              id="movieSearchInput"
              className="text-darkBlue p-2 rounded-lg"
            />
            <label htmlFor="movieSearchInput" className="hidden">
              Search For a Movie
            </label>
          </div>
          <div>
            <X
              onClick={() => setActiveSearch(!activeSearch)}
              className={`${activeSearch ? "visible" : "hidden"}`}
            />
            <Search
              onClick={() => setActiveSearch(!activeSearch)}
              className={`${!activeSearch ? "visible" : "hidden"}`}
            />
          </div>
        </div>
        <div
          className={` ${
            activeMenu
              ? "absolute top-0 left-0  h-[100vh] w-screen md:relative"
              : "hidden"
          } flex items-center justify-around flex-col bg-black py-8`}
        >
          <div
            className="absolute top-3 left-1/2 bg-darkBlue rounded-full flex items-center justify-center w-8 h-8"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <X />
          </div>
          <div className="flex flex-col items-center w-3/4 ">
            <div className="mb-4">
              <div className="cursor-pointer" onClick={() => setActiveMenu(!activeMenu)}>
                <Image src={Logo} width={160} alt="TMDB logo" />
              </div>
            </div>
            <div className="flex justify-between w-full">
              <Link href="#" onClick={() => setActiveMenu(!activeMenu)}>
                Movies
              </Link>
              <Link href="#" onClick={() => setActiveMenu(!activeMenu)}>
                TV Shows
              </Link>
              <Link href="#" onClick={() => setActiveMenu(!activeMenu)}>
                People
              </Link>
              <Link href="#" onClick={() => setActiveMenu(!activeMenu)}>
                More
              </Link>
            </div>
          </div>
          <div className="flex justify-between w-3/4">
            <Plus />
            <div className="border p-1 rounded-sm font-bold">EN</div>
            <Link href="#">Login</Link>
            <Link href="#">Join TMDB</Link>
          </div>
        </div>
      </div>
      <div className="hidden  md:flex justify-between ">
        <div className="flex items-center">
          <div className="mr-2">
            <Image src={Logo} width={160} alt="TMDB logo" />
          </div>
          <div className="flex">
            <Link href="#" className="md:mr-2 lg:mr-4">
              Movies
            </Link>
            <Link href="#" className="md:mr-2 lg:mr-4">
              TV Shows
            </Link>
            <Link href="#" className="md:mr-2 lg:mr-4">
              People
            </Link>
            <Link href="#" className="">
              More
            </Link>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <div
              className={`${
                activeDesktopSearch ? "hidden" : "flex items-center"
              }`}
            >
              <Plus className="md:mr-2 lg:mr-4" />
              <div className="border p-1 rounded-sm font-bold md:mr-2 lg:mr-4">
                EN
              </div>
              <Link href="#" className="md:mr-2 lg:mr-4">
                Login
              </Link>
              <Link href="#" className="md:mr-2 lg:mr-4">
                Join TMDB
              </Link>
            </div>
            <div className={`${activeDesktopSearch ? "visible" : "hidden"}`}>
              <input
                type="text"
                id="movieSearchInputDesktop"
                className="text-darkBlue p-2 rounded-lg"
              />
              <label htmlFor="movieSearchInputDesktop" className="hidden">
                Search For a Movie
              </label>
            </div>
            <Search
              onClick={() => setActiveDesktopSearch(!activeDesktopSearch)}
              className={`${!activeDesktopSearch ? "visible" : "hidden"}`}
            />
            <X
              onClick={() => setActiveDesktopSearch(!activeDesktopSearch)}
              className={`${activeDesktopSearch ? "visible" : "hidden"}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
