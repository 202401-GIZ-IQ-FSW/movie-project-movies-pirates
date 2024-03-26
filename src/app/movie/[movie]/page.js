"use client"
import React, { useState, useEffect } from "react"
import sample from '../../../../style/sample.css';
const Page = ({ params }) => {
  const newParam=params.movie
  console.log(newParam)
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
          `https://api.themoviedb.org/3/movie/${params.movie}?language=en-US&api_key=97b9fa008c0d44e6c42538bc72b8628f`,
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
    <main className="BG">
 {movieInfo && (
  <>
      <div className="BGIMG blury absolute h-screen w-full bg-no-repeat " style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieInfo.poster_path})`}}>
 
    </div>
         <div className=' container w-[85%] mx-auto grid grid-cols-1fr sm:grid-cols-2 gap-4 p-10 text-white'>

<div><img src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} alt=''/></div>
<div>
<h1 className='text-5xl text-purple-700 font-bold font-abc'>{movieInfo.title}</h1>
<p> {movieInfo.runtime} minutes</p>
<p>{movieInfo.release_date}</p>
<p>{movieInfo.original_language}</p>
<hr/>
<p>{movieInfo.vote_average} ({movieInfo.vote_count} votes)</p>
<p>{movieInfo.overview}</p>
<p><strong>Director: </strong> here</p>
<h2 className='bg-purple-700 p-5 text-xl w-1/3 text-center  font-abc font-bold' > Watch Trailer</h2>
</div>
</div>
     </> )}
    
      {movieInfo && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
            alt="Movie Poster"
          />
          <h1  className='my-5 bg-red-100'>{movieInfo.title}</h1>
          <p className='my-3'>Release Date: {movieInfo.release_date}</p>
          <p  className='my-5'>Runtime: {movieInfo.runtime} minutes</p>
          <p  className='p-5'>Language: {movieInfo.original_language}</p>
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
    </main>
  )
}

export default Page
