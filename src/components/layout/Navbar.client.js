"use client"
import { useState } from "react";
import navItems from "./NavbarItems";
import Image from "next/image";
import Link from "next/link";
import image from "../../../public/i.png";

// This page, a child of a Server-Side Rendering (SSR) component,
// cannot use hooks like useState due to SSR limitations. 
//To address this, we've prefixed the page with "use client" and appended '.client' to the file name.





export default function NavBar() {
  const [visibleDropdown, setVisibleDropdown] = useState(null);

  const toggleDropdown = (itemId) => {
    setVisibleDropdown(visibleDropdown === itemId ? null : itemId);
  };
//you can use this color as well 9344E3

  return (
    <nav className="bg-purple-800 py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-6">
        {/* Increased the size of the div wrapping the image and adjusted spacing */}
        <div className="rounded-full overflow-hidden h-24 w-24"> {/* Adjusted size */}
          <Image
            src={image}
            alt="Logo"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
        <div className="flex space-x-6 relative"> {/* Adjusted spacing */}
          {navItems.map((item) => (
            <div
              key={item.id}
              className="font-jost text-white text-2xl font-bold leading-9 tracking-tight relative"
            >
              <Link
                onClick={(e) => {
                  e.preventDefault(); // Prevent default to handle dropdown logic correctly
                  if (item.isDropdown) {
                    return toggleDropdown(item.id);
                  }
                  console.log(item);
                }}
                className="flex items-center hover:text-opacity-80 focus:text-opacity-80 cursor-pointer"
                href={item.href}
              >
                {item.name}
                {item.isDropdown && <span className="ml-2 text-sm">▼</span>}
              </Link>
              {item.isDropdown && visibleDropdown === item.id && (
                <div className="absolute mt-4 py-2 bg-purple-800 rounded-md shadow-lg z-50">
                {item.dropdownItems.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.id}
                      href={dropdownItem.href}
                      passHref
                      className="block px-10 py-2 hover:bg-purple-700 text-white whitespace-nowrap"
                      onClick={()=>console.log(dropdownItem)}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          aria-label="Search"
          className="px-4 py-2 leading-9 text-xl rounded-md text-[#9344E3] font-jost"
        />
      </div>
    </nav>
  );
}
