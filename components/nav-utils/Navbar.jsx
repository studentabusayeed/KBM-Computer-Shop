"use client";

import Image from "next/image";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BiLogInCircle } from "react-icons/bi";
import { CgUserlane } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import logo1 from "@/assets/logo.png";
import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";
import Lang from "./Lang";
import Avatar from "./Avatar";
import NavCart from "./NavCart";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Navbar = () => {
  const user = false;

  const menuItems = (
    <>
      <li >
        <Link href="/">Home </Link>
      </li>
      <li>
        <Link href="/shop">Shop </Link>
      </li>
      <li>
        <Link href="/pages">Pages </Link>
      </li>
      <li>
        <Link href="/element">Element </Link>
      </li>
      <li>
        <Link href="/services">Services </Link>
      </li>
      <li>
        <Link href="/blogs">Blogs </Link>
      </li>
      <li>
        <Link href="/about-us">About Us </Link>
      </li>
      <li>
        <Link href="/contract">Contacts </Link>
      </li>
    </>
  );
  const handelLogOut = () => {
    // logOut()
    //   .then(() => {
    //     navigate("/");
    //   })
    //   .catch(() => {});
  };

  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        // Scrolling down, hide the navbar
        setVisible(false);
      } else {
        // Scrolling up, show the navbar
        setVisible(true);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div className="mb-[100px]">
      <div
        className={`${
          visible ? "block" : "hidden"
        } z-20 fixed top-0 left-0 w-full bg-white transition-all duration-700 ease-in-out`}
      >
        <div className="nav-container">
          <div className="hidden xl:block">
            <div className="flex items-center justify-between py-2 ">
              <div className="flex items-center gap-10 justify-between">
                <Logo />
                <Search />
              </div>
              <div className="flex items-center gap-4 lg:gap-10">
                <Lang />
                <NavCart />
                <div>
                  <Menu
                    menuButton={
                      <MenuButton>
                        <Avatar />
                      </MenuButton>
                    }
                    transition
                  >
                    {user ? (
                      <div className="flex flex-col gap-2 divide-y-2 divide-gray-3">
                        <Link
                          href="/dashboard"
                          type="submit"
                          className="font-semibold text-neutral-600"
                        >
                          <MenuItem className="gap-4 items-center">
                            <MdOutlineDashboardCustomize className="text-xl 2xl:text-3xl" />
                            Dashboard
                          </MenuItem>
                        </Link>
                        <button
                          type="submit"
                          className="font-semibold text-neutral-600"
                          onClick={handelLogOut}
                        >
                          <MenuItem className="gap-4 items-center">
                            <HiOutlineLogout className="text-xl 2xl:text-3xl" />{" "}
                            Log Out
                          </MenuItem>
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2 divide-y-2 divide-gray-3">
                        <Link
                          className=" font-semibold text-neutral-600"
                          href="/Login"
                        >
                          <MenuItem className="gap-4 items-center">
                            <BiLogInCircle className="text-xl 2xl:text-3xl" />
                            Login
                          </MenuItem>
                        </Link>
                        <Link
                          className=" font-semibold text-neutral-600"
                          href="/signUp"
                        >
                          <MenuItem className="gap-4 items-center">
                            <CgUserlane className="text-xl 2xl:text-3xl" />
                            Sign Up
                          </MenuItem>
                        </Link>
                      </div>
                    )}
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-3" />
        <div className="hidden xl:block ">
          <div className="nav-container ">
            <div className="py-2">
              <ul className="flex items-center justify-between text-md font-semibold text-gray-5 hover:text-gray-6 py-1 2xl:py-2">
                {menuItems}
              </ul>
            </div>
          </div>
          <hr className=" border-1 border-gray-3 drop-shadow-xl" />
        </div>
        <div className=" xl:hidden">
          <ResponsiveNavbar menuItems={menuItems} />
        </div>
      </div>
      <Image alt="" src={logo1} width={150} height={120} />
    </div>
  );
};

export default Navbar;
