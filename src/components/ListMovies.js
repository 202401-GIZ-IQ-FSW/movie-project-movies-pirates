



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
