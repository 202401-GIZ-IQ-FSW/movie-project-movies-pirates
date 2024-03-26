import Image from "next/image"
import image from "@/home/i.png"

// This page, a child of a Server-Side Rendering (SSR) component,
// cannot use hooks like useState due to SSR limitations.
//To address this, we've prefixed the page with "use client" and appended '.client' to the file name.

export default function NavBar() {
  //you can use this color as well 9344E3

  return (
    <nav className="bg-slate-800 py-4 px-6 flex justify-between items-center font-extralight z-50 bg-transparent ">
      <div className="flex items-center space-x-6 ">
        {/* Increased the size of the div wrapping the image and adjusted spacing */}
        <div className="rounded-full overflow-hidden h-24 w-24">
          {" "}
          {/* Adjusted size */}
          <Image
            href="/"
            src={image}
            alt="Logo"
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
        <div className="flex space-x-6 text-sm relative md:text-lg  sm:text-lg  text-white  ">
          <a className="" href={"/"}>
            Home
          </a>
          <div className="dropdown dropdown-hover ">
            <a href={"/Movie?name=Top+Rate&category=top_rated"}>Movie</a>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 w-52 bg-slate-800"
            >
              <li>
                <a href={"/Movie?page=1&sort_by=vote_avarage.dec"}>Top rated</a>
              </li>
              <li>
                <a href={"/Movie?page=4&sort_by=revenue.desc"}>Top Office</a>
              </li>
              <li>
                <a href={"/Movie?page=1&sort_by=primary_release_date.desc"}>
                  Up Comming{" "}
                </a>
              </li>
            </ul>
            <a className="mx-4" href={"#"}>
              Tv Show
            </a>
            <a className="mx-4" href={"/Actors"}>
              Actors
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2 ">
        <input
          type="text"
          placeholder="Search..."
          aria-label="Search"
          className="px-4 py-2 outline-none leading-9 text-xl rounded-md text-[#9344E3] font-jost"
        />
      </div>
    </nav>
  )
}