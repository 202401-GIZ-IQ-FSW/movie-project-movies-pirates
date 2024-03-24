import React from 'react'

const MoviesCardd = ({title,movieImg,genres}) => {

     
     
  return (
    <div style={{border:'solid red'}}>MoviesCardd

    <img src={`https://image.tmdb.org/t/p/w500${movieImg}`} alt={title}/>
    <h1>{title}</h1>
    
    <p><strong>Genre:</strong> {genres.join(', ')}</p>

      <ul> 
        {/* {
            genres.map(genreId => (
                <li key={genreId}>{genreId.title}</li>
            ))
        }   */}
     </ul>  
    </div>
  )
}

export default MoviesCardd