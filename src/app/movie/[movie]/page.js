"use client"
import React, { useState, useEffect } from "react"
import ActorCard from "@/components/ActorCard/ActorCard"
import Card from "@/components/Card/Card"

const Page = ({ params }) => {
  const [movieInfo, setMovieInfo] = useState(null)
  const [credits, setCredits] = useState([])
  const [relatedMovies, setRelatedMovies] = useState([])
  const [trailerKey, setTrailerKey] = useState(null)
  const [productionCompanies, setProductionCompanies] = useState([])
  const [director, setDirector] = useState("")
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch movie details
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${params.movie}?language=en-US&api_key=97b9fa008c0d44e6c42538bc72b8628f`,
        )
        const movieData = await movieResponse.json()
        setMovieInfo(movieData)
        setProductionCompanies(movieData.production_companies)

        // Fetch movie credits
        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${params.movie}/credits?api_key=97b9fa008c0d44e6c42538bc72b8628f`,
        )
        const creditsData = await creditsResponse.json()
        setCredits(creditsData.cast.slice(0, 5)) // Limit to 5 actors

        // Fetch movie details again to get director's information
        const fullMovieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${params.movie}?append_to_response=credits&api_key=97b9fa008c0d44e6c42538bc72b8628f`,
        )
        const fullMovieData = await fullMovieResponse.json()
        const director = fullMovieData?.credits?.crew?.find(
          (member) => member.job === "Director",
        )
        if (director) {
          setDirector(director.name) // Set the director's name
        }
        // // Fetch related movies
        // const relatedResponse = await fetch(
        //   `https://api.themoviedb.org/3/movie/${newParam}/similar?language=en-US&api_key=97b9fa008c0d44e6c42538bc72b8628f`,
        // )
        // const relatedData = await relatedResponse.json()
        // setRelatedMovies(relatedData.results.slice(0, 5)) // Limit to 5 related movies

        // Fetch related movies
        const relatedResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${params.movie}/similar?language=en-US&api_key=97b9fa008c0d44e6c42538bc72b8628f`,
        )
        const relatedData = await relatedResponse.json()
        setRelatedMovies(relatedData.results.slice(0, 5)) // Limit to 5 related movies

        // Fetch movie trailers
        const trailersResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${params.movie}/videos?api_key=97b9fa008c0d44e6c42538bc72b8628f`,
        )
        const trailersData = await trailersResponse.json()
        const youtubeTrailers = trailersData.results.filter(
          (trailer) => trailer.site === "YouTube",
        )

        setTrailerKey(youtubeTrailers[0]?.key) // Set the key of the first YouTube trailer
      } catch (error) {
        console.error(error)
      }
    }

    fetchMovieDetails()
  }, [params.movie])

  return (
    <div className="bg-[#020D18] text-white BG">
      {movieInfo && (
        <div>
          <div className="grid gap-4 grid-cols-2">
            <div>
              <img
                className="w-[500px] h-[780px] relative left-16 top-10"
                src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
                alt="Movie Poster"
              />
            </div>
            <div className="relative right-36 top-4">
              <h1 className="relative top-11 text-4xl">{movieInfo.title}</h1>
              <div className="grid grid-cols-3">
                <p className="relative top-16 text-xs">
                  {movieInfo.runtime} min
                </p>
                <p className="relative top-16 right-44 text-xs">
                  {movieInfo.release_date}
                </p>
                <p className="relative top-16 right-80 text-xs">
                  lang: {movieInfo.original_language}
                </p>
              </div>
              <hr className="border-t-3 border-white w-1/3 relative top-16 mt-2"></hr>
              <p className="relative top-20 text-xs">
                {Array.from(
                  { length: Math.round(movieInfo.vote_average) },
                  (_, index) => (
                    <span key={index}>⭐</span>
                  ),
                )}
                <span className="mx-2">|</span>
                {movieInfo.vote_average} ({movieInfo.vote_count} votes)
              </p>
              <p className="relative top-28 text-lg text-justify">
                {movieInfo.overview}
              </p>
            </div>
          </div>

          <div className="relative left-96 bottom-96 ml-56">
            {!showVideo ? (
              <button
                onClick={() => setShowVideo(true)}
                className="h-12 w-64 bg-purple-600 text-white 
              shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 font-abc
              "
              >
                Watch Trailer
              </button>
            ) : (
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title="YouTube video player"
                frameborder="0"
                allowfullscreen
              ></iframe>
            )}
          </div>

          <ul className="flex-wrap relative left-16 grid grid-rows-2 ">
            {productionCompanies.map((company) => (
              <li key={company.id} className="flex items-center mr-4 mb-4 ">
                <span className="mr-2">{company.name}</span>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${company.logo_path}`}
                  alt={company.name}
                />
              </li>
            ))}
          </ul>

          <h1 className="text-[#9344E3] font-abc text-[34px] relative left-4">
            CAST
          </h1>
          <ul className="grid grid-cols-5 mb-7">
            {credits.map((actor) => (
              <a key={actor.id} href={`/actor/${actor.id}`}>
                <ActorCard
                  key={actor.id}
                  name={actor.name}
                  imgSrc={actor.profile_path}
                />
              </a>
            ))}
          </ul>

          <h1 className="text-[#9344E3] font-abc text-[34px] relative left-4">
            RELATED <span className=" text-white">MOVIES</span>
          </h1>
          <ul className="grid grid-cols-5">
            {relatedMovies.map((relatedMovie) => (
              <Card
                key={relatedMovie.id}
                id={relatedMovie.id}
                movie={relatedMovie}
                title={relatedMovie.original_title}
                Image={relatedMovie.poster_path}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Page
