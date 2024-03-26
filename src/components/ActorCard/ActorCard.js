import React from "react"
import sample from "../../../style/sample.css"
function ActorCard({ name, imgSrc }) {
  return (
    <>
      <div className="relative w-full   mx-4 mb-8 overflow-hidden   ActorCArd">
        <img 
          className="z-1"
          src={`https://image.tmdb.org/t/p/w500${imgSrc}`}
          alt={name}
        />
        <div className="  z-1  absolute  imgOverlay "></div>
        <h1 className="absolute z-10  mx-5 text-white font-semibold text-lg bottom-0">
          {" "}
          {name}
        </h1>
      </div>
    </>
  )
}

export default ActorCard
