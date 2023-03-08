import React, { useState, useEffect } from 'react';
import axios from "axios";

function SWMovies() {
    const [number, setNumber] = useState(1);
    const [movie, setMovie] = useState("");
// Request data, save response.data to movie, display title
      useEffect(() => {
        async function getData(){
            const response = await axios.get(`https://swapi.dev/api/films/${number}/`);
            setMovie(response.data);
        }
        getData();
      }, [number]);
      // [number] Only update when number changes
    return(
        // <div>
        //     <h1>Pick a Movie</h1>
        //     <h4>You chose: {number}</h4>
        //     <select value={number} onChange={e => setNumber(e.target.value)}>
        //         {Array.from({ length: 7 }, (_, index) => (
        //     <option key={index} value={index + 1}>{index + 1}</option>
        //     ))}
        // </select>
        // </div>


        <div>
            <h1>Pick a Movie</h1>
            <h4>{movie.title}</h4>
            <p>{movie.opening_crawl}</p>
            <select value={number} onChange={e => setNumber(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
            </select>
        </div>
    );
}
export default SWMovies;
