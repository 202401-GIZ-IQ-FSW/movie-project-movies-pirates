"use client"
import React, { useState, useEffect } from "react"

const Page = ({ params }) => {
  const [movieInfo, setMovieInfo] = useState(null)
  const [credits, setCredits] = useState([])
  const [relatedMovies, setRelatedMovies] = useState([])
  const [trailerKey, setTrailerKey] = useState(null)
  const [productionCompanies, setProductionCompanies] = useState([])

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch movie details
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${params.Movie}?language=en-US&api_key=97b9fa008c0d44e6c42538bc72b8628f`,
        )
        const movieData = await movieResponse.json()
        setMovieInfo(movieData)
        setProductionCompanies(movieData.production_companies)

        // Fetch movie credits
        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${params.Movie}/credits?api_key=97b9fa008c0d44e6c42538bc72b8628f`,
        )
        const creditsData = await creditsResponse.json()
        setCredits(creditsData.cast.slice(0, 5)) // Limit to 5 actors

        // Fetch related movies
        const relatedResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${params.Movie}/similar?language=en-US&api_key=97b9fa008c0d44e6c42538bc72b8628f`,
        )
        const relatedData = await relatedResponse.json()
        setRelatedMovies(relatedData.results.slice(0, 5)) // Limit to 5 related movies

        // Fetch movie trailers
        const trailersResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${params.Movie}/videos?api_key=97b9fa008c0d44e6c42538bc72b8628f`,
        )
        const trailersData = await trailersResponse.json()
        const youtubeTrailers = trailersData.results.filter(
          (trailer) => trailer.site === "YouTube",
        )

        setTrailerKey(youtubeTrailers[0].key) // Set the key of the first YouTube trailer
      } catch (error) {
        console.error(error)
      }
    }

    fetchMovieDetails()
  }, [params.Movie])

  return (
    <div>
      {movieInfo && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
            alt="Movie Poster"
          />
          <h1>{movieInfo.title}</h1>
          <p>Release Date: {movieInfo.release_date}</p>
          <p>Runtime: {movieInfo.runtime} minutes</p>
          <p>Language: {movieInfo.original_language}</p>
          <p>
            Rating: {movieInfo.vote_average} ({movieInfo.vote_count} votes)
          </p>
          <p>Overview: {movieInfo.overview}</p>
          <h2>Actors:</h2>
          <ul>
            {credits.map((actor) => (
              <li key={actor.id}>{actor.name}</li>
            ))}
          </ul>
          <h2>Related Movies:</h2>
          <ul>
            {relatedMovies.map((relatedMovie) => (
              <li key={relatedMovie.id}>{relatedMovie.title}</li>
            ))}
          </ul>
          {trailerKey && (
            <div>
              <h2>Trailer:</h2>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title="YouTube video player"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          )}

          <ul>
            {productionCompanies.map((company) => (
              <li key={company.id}>
                {company.name}{" "}
                <img
                  src={`https://image.tmdb.org/t/p/w200/${company.logo_path}`}
                  alt={company.name}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Page
