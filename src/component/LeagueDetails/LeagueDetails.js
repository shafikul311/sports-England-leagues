import React from "react";
import "./LeagueDetails.css";
import { Jumbotron, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTransgender, faFlag ,faFutbol ,faBahai} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Male from "./../Photo/male.png";
import Female from "./../Photo/female.png";

const LeagueDetails = (props) => {
  // console.log(props)




  const {
    intFormedYear,
    strBanner,
    strCountry,
    strGender,
    strLeague,
    strSport,
    strDescriptionEN,
    strDescriptionFR,
    strPoster,
    strFacebook,
    strTwitter,
    strYoutube,
    strBadge,
    strLogo
  } = props.ld;

  console.log(strYoutube)


  return (
    <div>
      {/* Header banner container */}
      <div className="league-details">
        <img src={strBanner} style={{ width: "300px" }} alt="" />
      </div>


      <div className="container">

        {/* jumbotron league details and image */}

        <Jumbotron
          fluid
          className="league-details-container"
          style={{ backgroundColor: "#5352ed" }}
        >
          <Container className="j-container justify-content-between">
            <div className="m-4">
              <h4>{strLeague}</h4>
              <p> <FontAwesomeIcon icon={faBahai} /> Founded :{intFormedYear}</p>
              <p>
                <FontAwesomeIcon icon={faFlag} /> Country :{strCountry}
              </p>
              <p>
                <FontAwesomeIcon icon={faTransgender} /> Gender :{strGender}
              </p>

              <p><FontAwesomeIcon icon={faFutbol} /> Sports Type : {strSport}</p>
            </div>

            <div className="m-4">

              {
                strGender ==='Male'? <img src={Male} className="img-style" alt="" /> : <img src={Female} className="img-style" alt="" />
              }
              
            </div>
          </Container>
        </Jumbotron>

        <p>{strDescriptionEN}</p>

        <br />
        <br />
        <p>{strDescriptionFR}</p>

        <div className="text-align">
          <a href={`https://${strFacebook}`} className="social">
            {" "}
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href={`https://${strTwitter}`} className="social">
            {" "}
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href={`https://${strYoutube}`} id="youtube" className="social">
            {" "}
         
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeagueDetails;




