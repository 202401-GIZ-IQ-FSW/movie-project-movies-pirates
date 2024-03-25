"use client"
import React from "react"
import Card from "@/components/Card/Card"
function Movies({ MoviesData }) {

  console.log({MoviesData})
  return (
    <div className="flex  flex-wrap ">
      {MoviesData.results.map((movie) => {
        return (
          <Card
            key={movie.id}
            id={movie.id}
            movie={movie}
            title={movie.original_title}
            Image={movie.poster_path}
          />
        )
      })}
    </div>
  )
}

export default Movies
