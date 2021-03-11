import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Team from '../../Team/Team';
import './Home.css';
// import background from "./images/banner.png";
const Home = () => {
    const [leagues , setLeague] = useState([])


    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England`
        fetch(url)
        .then(res => res.json())
        .then( data =>setLeague(data.countrys))
        
    },[])


   
   
    return (
        <div >
            <div className="img-container">
                SPORTS ENGLAND
            </div>


            <div   className="league-container">

                        
                    {
                        leagues.map((lg , idTeam) => <Team key={idTeam} lg={lg}> </Team> )
                    }



            </div>
           


            
            
        </div>
    );
};

export default Home;