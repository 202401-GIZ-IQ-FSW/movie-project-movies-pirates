"use client"
import sample from '../../../../style/sample.css'
import React, { useState, useEffect } from 'react';
import Card from '../../../components/Card/Card'

const Page = ({ params }) => {
    const [actorInfo, setActorInfo] = useState(null);
    const [movieCredits, setMovieCredits] = useState([]);
    
    const apiKey = "97b9fa008c0d44e6c42538bc72b8628f";
    const apiUrl = "https://api.themoviedb.org/3";
    const personId = params.actor; 
    const actorCreditsEndpoint = `/person/${personId}/movie_credits`;
    const actorCreditsUrl = `${apiUrl}${actorCreditsEndpoint}?api_key=${apiKey}`;
    
    useEffect(() => {
        const fetchActorDetails = async () => {
            try {
                const actorResponse = await fetch(
                    `${apiUrl}/person/${personId}?api_key=${apiKey}`
                );
                const actorData = await actorResponse.json();
                console.log("Actor Data:", actorData);
                setActorInfo(actorData);



                const creditsResponse = await fetch(
                    `${apiUrl}/person/${personId}/movie_credits?api_key=${apiKey}`
                );
                const creditsData = await creditsResponse.json();
                setMovieCredits(creditsData.cast);
                
            } catch (error) {
                console.error(error);
            }
        };

        fetchActorDetails();
    }, [apiKey, personId]);

    return (
        <main className='BG py-10'>
{actorInfo && (
                <div className='bgColorCard container w-[85%] mx-auto grid  grid-cols-1fr sm:grid-cols-1fr-3fr gap-10 p-10 text-white'>

                    <div>     <img src={`https://image.tmdb.org/t/p/w300${actorInfo.profile_path}`} alt={actorInfo.name} /></div>
                    <div>
                        <h1 className='text-5xl text-purple-700 font-bold font-abc'>{actorInfo.name}</h1>
                        <p className='text-lg my-3' >{actorInfo.gender === 1 ? "Female" : "Male"}</p>
                        <p className='text-lg my-3' >{ actorInfo.popularity}</p>
                        <p className='text-lg my-3' >  { actorInfo.birthday}</p>

                        <h2 className='font-semibold text-xl  my-3'></h2>
                        <hr/>
                        <p className=' my-3'>{actorInfo.biography }</p>

                    </div>
                </div>

)} 
          

          <div className='  container w-[85%] mx-auto grid  grid-cols-1fr sm:grid-cols-5 gap-10 p-10 text-white'>
 
                                {movieCredits.map(movie => (

                                    
                                   <a href={`/movie/${movie.id}` }> 
                                   
                                   {/* <li key={movie.id}>{movie.title}</li> */}
                                   
                                   <Card
                                    key={movie.id}
                                    id={movie.id}
                                    movie={movie}
                                    title={movie.title}
                                    Image={movie.poster_path}
                                     />
                                   
                                   </a>
                                ))}

                                </div>
                 <hr/>           
        </main>
    );
};

export default Page;
