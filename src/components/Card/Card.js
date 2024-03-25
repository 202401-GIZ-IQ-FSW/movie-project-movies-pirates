"use client"
import Link from "next/link"
import React from "react"
 function card({ Image, title, id }) {

    

  return (
    <a
      className={`text-decoration-none ${Image == undefined ? "skeleton" : ""}`}
      href={`/movies/${id}` }  
    >


      
      <div className="inline-block cursor-pointer relative p-2">
        <div className="w-[240px] h-[350px] relative">
          <img
            alt="Migration"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="w-full h-full object-cover"
            sizes="100vw"
            srcSet={`https://image.tmdb.org/t/p/w500/${Image}`}
            src={`https://image.tmdb.org/t/p/w500/${Image}`}
            //  style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
            {title}
          </p>
          <p>
            <svg
              // onClick={""}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              // add the class to the svg when adding to favority list
              className="absolute top-4 left-4 text-gray-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
            </svg>
          </p>
        </div>
      </div>
    </a>
  )
}

export default card
