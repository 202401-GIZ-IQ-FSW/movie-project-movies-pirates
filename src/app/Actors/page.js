"use client"
import React, { useState, useEffect } from 'react';
 import ActorCard from '@/components/ActorCard/ActorCard';
function page() {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const actorsPerPage = 10; // Adjust the number of actors per page as needed

  useEffect(() => {
    fetchActors();
  }, [currentPage]);

  const fetchActors = async () => {
    try {
      const apiKey = "97b9fa008c0d44e6c42538bc72b8628f";
      const apiUrl = "https://api.themoviedb.org/3";
      const endpoint = "/person/popular";
      const url = `${apiUrl}${endpoint}?api_key=${apiKey}&page=${currentPage}`;

      const response = await fetch(url);
      const data = await response.json();
      setActors(data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching actors:', error);
    }
  };

  const nextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="p-0 m-0  min-h-screen   bg-gray-900"  >
         <div className="w-[80%]  mx-auto ">
        <h1 className="text-center font-bold text-xl">
          <span className="text-[#9344E3]"> Lovely </span>
          Actors
        </h1>
     

      
      <div className='container mx-auto grid grid-cols-5 gap-2  '>
        {actors.map(actor => (


        <ActorCard key={actor.id} name= {actor.name} imgSrc={actor.profile_path}/>  
       
        ))}
     </div>
      <button onClick={prevPage} disabled={currentPage === 1}>Previous Page</button>
      <button onClick={nextPage}>Next Page</button>

      </div>
    </main>
  );
}

export default page;
