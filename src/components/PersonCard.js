import React from "react"
import "tailwindcss/tailwind.css"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import Head from "next/head"

const PersonCard = ({ name, imageUrl, linkedinUrl, githubUrl }) => {
  return (
    <div className="lg:bg-[#0F171E]  lg:w-[427px] lg:h-[153px] md:w-[300px] md:h-[100px] sm:w-[200] sm:h-[90] relative right-3 ">
      <div className="details-container grid grid-cols-2">
        <div className="image-container">
          <img
            className="rounded-full lg:h-[96px] lg:w-[96px] md:h-[76px] md:w-[76px] sm:h-[56px] sm:w-[56px] object-cover relative top-8 left-4"
            src={imageUrl}
            alt="Person"
          />
        </div>
        <h1 className="text-[#9344E3] lg:text-2xl md:text-xl font-abc relative lg:top-7 lg:right-12 md:top-5 md:right-8 sm:top-6">
          {name}
        </h1>
      </div>

      <div className="icons grid grid-cols-2 gap-0">
        <a
          className="github text-white"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="lg:w-[42px] lg:h-[42px] md:w-[32px] md:h-[32px] sm:h-[24px] sm:w-[24px] relative bottom-1 lg:left-40 lg:ml-5 md:left-14 md:ml-16 sm:left-16 sm:ml-7 " />
        </a>
        <a
          className="linkedin text-white"
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="lg:w-[42px] lg:h-[42px] md:w-[32px] md:h-[32px] sm:h-[24px] sm:w-[24px] relative bottom-1 left-7 sm:left-11" />
        </a>
      </div>
    </div>
  )
}

export default PersonCard
