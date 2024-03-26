"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import image from "../../../public/i.png"
import { FaSearch } from "react-icons/fa"

// This page, a child of a Server-Side Rendering (SSR) component,
// cannot use hooks like useState due to SSR limitations.
//To address this, we've prefixed the page with "use client" and appended '.client' to the file name.

export default function NavBar() {
  //you can use this color as well 9344E3
  const router = useRouter()

  const search = (e) => {
    e.preventDefault()
    // navigate to move pages
    console.log("search", e.target[0].value)
    router.push(`/movie?page=1&query=${e.target[0].value}`)
    // console.log("search", e.target[0].value)
  }
  return (
    <nav className="bg-transparent py-4 px-6 flex justify-between items-center font-extralight ">
      <div className="flex items-center space-x-6">
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
            <a href={"/movie?page=1&sort_by=top_rated.desc"}>Movie</a>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 w-52 bg-slate-800"
            >
              <li>
                <a href={"/movie?page=1&sort_by=vote_avarage.desc"}>
                  Top rated
                </a>
              </li>
              <li>
                <a href={"/movie?page=4&sort_by=revenue.desc"}>Top Office</a>
              </li>
              <li>
                <a href={"/movie?page=1&sort_by=primary_release_date.desc"}>
                  Up Comming{" "}
                </a>
              </li>
            </ul>
          </div>
          <a className="mx-4" href={"/tv"}>
            Tv Show
          </a>
          <a className="mx-4" href={"/actor"}>
            Actors
          </a>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <form onSubmit={search}>
          <input
            type="text"
            name="search"
            placeholder="Search..."
            aria-label="Search"
            className="px-4 py-1 outline-none leading-9 text-lg  italic rounded-md text-[#9344E3] font-jost"
          />
          <button type="submit" className="">
            <FaSearch className="bg-transparent  relative right-8" />
          </button>
        </form>
      </div>
    </nav>
  )
}
