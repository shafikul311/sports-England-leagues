import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import LeagueDetails from '../LeagueDetails/LeagueDetails';

const TeamDetails = () => {
    const {idLeague} = useParams();

    const [ldetails , setLdetails]= useState([])


    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
        .then((response) =>response.json())
        .then(data =>setLdetails(data.leagues))

    }, [idLeague ])

    



    return (
        <div>
          
         
          {
              ldetails.map((ld ,idLeague ) => <LeagueDetails key={idLeague} ld={ld}></LeagueDetails>)
          }
            
        </div>
    );
};

export default TeamDetails;