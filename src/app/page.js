"use client"

import ListMovies from "@/components/ListMovies"
import TrendMovie from "@/components/TrendMovie/TrendMovie"

export default function Home() {
  return (
    <>
      <TrendMovie />
      <div className="w-[80%] ">
        <ListMovies />
      </div>
    </>
  )
}
