"use client"
import React, { useState, useEffect } from "react"
import ActorCard from "@/components/ActorCard/ActorCard"
const Page = () => {
  const [actors, setActors] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchActors()
  }, [currentPage])

  const fetchActors = async () => {
    try {
      const apiKey = "97b9fa008c0d44e6c42538bc72b8628f"
      const apiUrl = "https://api.themoviedb.org/3"
      const endpoint = "/trending/person/day"
      const url = `${apiUrl}${endpoint}?api_key=${apiKey}&page=${currentPage}`

      const response = await fetch(url)
      const data = await response.json()
      setActors(data.results)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching actors:", error)
    }
  }

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <main className="p-0 m-0  min-h-screen font-abc  bg-gray-900">
      <div className="w-[85%]  mx-auto ">
        <h1 className="text-center font-bold text-4xl text-white">
          <span className="text-[#9344E3]"> ALL </span>
          ACTORS
        </h1>

        <img src="ActorBg.jpg" className="absolute -z-1" />
        <div className="w-[80%]  mx-auto ">
          <h1 className="text-center font-bold text-xl">
            <span className="text-[#9344E3]"> Lovely </span>
            Actors
          </h1>

          <div className="container mx-auto grid sm:grid-cols-3 md:grid-cols-5 gap-2  ">
            {actors.map((actor) => (
              <a key={actor.id} href={`/actor/${actor.id}`}>
                <ActorCard
                  key={actor.id}
                  name={actor.name}
                  imgSrc={actor.profile_path}
                />
              </a>
            ))}
          </div>

          <div className="flex justify-between z-10 relative">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="bg-gray-700 text-white px-5 py-2 rounded-sm my-10 flex items-center "
            >
              {" "}
              <svg
                width="9"
                className="inline mr-5"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.46118 4.4651H0.469515M0.469515 4.4651L4.46535 8.46094M0.469515 4.4651L4.46535 0.469271"
                  stroke="#E9E9E9"
                  strokeWidth="0.761111"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Previous Page
            </button>
            <button
              onClick={nextPage}
              className="bg-gray-700 text-white px-5 py-2 rounded-sm my-10 justify-between  flex items-center"
            >
              Next Page{" "}
              <svg
                width="10"
                className="inline ml-5"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.15417 4.84984H9.14584M9.14584 4.84984L5.15001 0.854004M9.14584 4.84984L5.15001 8.84567"
                  stroke="#E9E9E9"
                  strokeWidth="0.761111"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
