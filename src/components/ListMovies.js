
// "use client"
// // import React, { useState, useEffect } from 'react';

// // function ListMovies() {
// //     const [page, setPage] = useState(1); // Default page number
// //     const [movies, setMovies] = useState([]); // Initialize movies state

// //     useEffect(() => {
// //         const apiKey = "97b9fa008c0d44e6c42538bc72b8628f";
// //         const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`;

// //         fetch(url)
// //             .then(res => res.json())
// //             .then(data => {
// //                 console.log(data); // Log the data
// //                 setMovies(data.results); // Update movies state with fetched data
// //             })
// //             .catch(error => console.log('There was a problem with the fetch operation:', error));
// //     }, [page]); // Fetch data whenever the page state changes

// //     return (
// //         <div>
// //             <h1>List of Movies</h1>
// //             {/* Render fetched movies */}
// //             {movies.map((movie, index) => (
// //                 <p key={index}>{movie.title}</p>
// //             ))}
// //         </div>
// //     );
// // }

// // export default ListMovies;



// // import React, { useState, useEffect } from 'react';

// // function ListMovies() {
// //     const [movies, setMovies] = useState([]); // Initialize movies state

// //     useEffect(() => {
// //         const apiKey = "97b9fa008c0d44e6c42538bc72b8628f";
// //         const totalPages = 5; // Number of pages to fetch

// //         async function fetchMovies() {
// //             let allMovies = [];

// //             for (let page = 1; page <= totalPages; page++) {
// //                 const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`;
// //                 const response = await fetch(url);
// //                 const data = await response.json();
// //                 allMovies = [...allMovies, ...data.results];
// //             }

// //             setMovies(allMovies);
// //         }

// //         fetchMovies();
// //     }, []); // Fetch data once on component mount

// //     return (
// //         <div>
// //             <h1>List of Movies</h1>
// //             {/* Render fetched movies */}
// //             {movies.map((movie, index) => (
// //                 <p key={index}>{movie.title}</p>
// //             ))}
// //         </div>
// //     );
// // }

// // export default ListMovies;


// import React, { useState, useEffect } from 'react';
//  import MoviesCardd from './MoviesCardd';

// function ListMovies() {
//     const [movies, setMovies] = useState([]); // Initialize movies state
//     const [currentPage, setCurrentPage] = useState(1); // Track current page

//     useEffect(() => {
//         const apiKey = "97b9fa008c0d44e6c42538bc72b8628f";
//         const fetchMovies = async () => {
//             const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${currentPage}`;
//             const response = await fetch(url);
//             const data = await response.json();
//             setMovies(data.results);
//         };
//         fetchMovies();
//     }, [currentPage]); // Fetch data whenever currentPage changes

//     const nextPage = () => {
//         setCurrentPage(prevPage => prevPage + 1);
//     };

//     const prevPage = () => {
//         setCurrentPage(prevPage => prevPage - 1);
//     };

//     return (
//         <div>
//             <h1>List of Movies</h1>
//           <MoviesCardd/>

//             {/* Render fetched movies */}
//             {movies.map((movie, index) => (
//                 // <p key={index}>{movie.title}</p>

//                 <MoviesCardd key={index}  title={movie.title} movieImg={movie.poster_path} genre={movie.genre_ids}/>

// ))}
//             {/* Pagination controls */}
//             <button onClick={prevPage} disabled={currentPage === 1}>Previous Page</button>
//             <button onClick={nextPage}>Next Page</button>
//         </div>
//     );
// }
"use client"
// export default ListMovies;
// import React, { useState, useEffect } from 'react';
// import MoviesCardd from './MoviesCardd';
// // Function to filter movies by genre name

// function ListMovies() {
//     const [movies, setMovies] = useState([]); // Initialize movies state
//     const [genres, setGenres] = useState({}); // Initialize genres state
//     const [currentPage, setCurrentPage] = useState(1); // Track current page

//     useEffect(() => {
//         const apiKey = "97b9fa008c0d44e6c42538bc72b8628f";

//         // Fetch genres
//         fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
//             .then(res => res.json())
//             .then(data => {
//                 // Store genres in an object for easy lookup
//                 const genresObj = {};
//                 data.genres.forEach(genre => {
//                     genresObj[genre.id] = genre.name;
//                 });
//                 setGenres(genresObj);
//             })
//             .catch(error => console.log('Error fetching genres:', error));

//         // Fetch movies
//         const fetchMovies = async () => {
//             const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${currentPage}`;
//             const response = await fetch(url);
//             const data = await response.json();
//             setMovies(data.results);
//         };
//         fetchMovies();
//     }, [currentPage]); // Fetch data whenever currentPage changes
  
    

//     const actionMovies = filterMoviesByGenreName(movies, "action", genres);
  

//     const nextPage = () => {
//         setCurrentPage(prevPage => prevPage + 1);
//     };

//     const prevPage = () => {
//         setCurrentPage(prevPage => prevPage - 1);
//     };
   
    



//     function filterMoviesByGenreName(movies, genreName, genres) {
//         // Check if genres is not an array or empty
//         if (!Array.isArray(genres) || genres.length === 0) {
//             console.error("Genres not initialized properly.");
//             return [];
//         }
    
//         // Find the genre by name
//         const genre = genres.find(genre => genre.name === genreName);
    
//         // If genre not found, return empty array
//         if (!genre) {
//             console.error(`Genre "${genreName}" not found.`);
//             return [];
//         }
    
//         // Filter movies by genre ID
//         return movies.filter(movie => movie.genre_ids.includes(genre.id));
//     }
    


//     return (
//         <div>
//             <h1>List of Movies</h1>
//             {/* Render fetched movies */}
//             {actionMovies.map((movie, index) => (
//                 <MoviesCardd
//                     key={index}
//                     title={movie.title}
//                     movieImg={movie.poster_path}
//                     genres={movie.genre_ids.map(id => genres[id])} // Map genre IDs to titles
//                 />
//             ))}
//             {/* Pagination controls */}
//             <button onClick={prevPage} disabled={currentPage === 1}>Previous Page</button>
//             <button onClick={nextPage}>Next Page</button>
//         </div>
//     );
// }

// export default ListMovies;



"use client"
import React, { useState, useEffect } from 'react';
import MoviesCardd from './MoviesCardd';

function ListMovies() {
    const [movies, setMovies] = useState([]); // Initialize movies state
    const [genres, setGenres] = useState([]); // Initialize genres state as an array
    const [currentPage, setCurrentPage] = useState(1); // Track current page

    useEffect(() => {
        const apiKey = "97b9fa008c0d44e6c42538bc72b8628f";

        // Fetch genres
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
            .then(res => res.json())
            .then(data => setGenres(data.genres))
            .catch(error => console.log('Error fetching genres:', error));

        // Fetch movies
        const fetchMovies = async () => {
            const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${currentPage}`;
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data.results);
        };
        fetchMovies();
    }, [currentPage]); // Fetch data whenever currentPage changes

    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    function filterMoviesByGenreName(movies, genreName) {
        // Find the genre by name
        const genre = genres.find(genre => genre.name.toLowerCase() === genreName.toLowerCase());

        // If genre not found, return empty array
        if (!genre) {
            console.error(`Genre "${genreName}" not found.`);
            return [];
        }

        // Filter movies by genre ID
        return movies.filter(movie => movie.genre_ids.includes(genre.id));
    }

    return (
        <div>
            <h1>List of Movies</h1>
            {/* Render fetched movies */}
            {filterMoviesByGenreName(movies, "comedy").map((movie, index) => (
                <MoviesCardd
                    key={index}
                    title={movie.title}
                    movieImg={movie.poster_path}
                    genres={movie.genre_ids.map(id => {
                        const genre = genres.find(genre => genre.id === id);
                        return genre ? genre.name : null;
                    })}
                />
            ))}
            {/* Pagination controls */}
            <button onClick={prevPage} disabled={currentPage === 1}>Previous Page</button>
            <button onClick={nextPage}>Next Page</button>
        </div>
    );
}

export default ListMovies;
