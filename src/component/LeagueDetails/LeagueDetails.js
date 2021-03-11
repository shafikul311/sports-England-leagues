import React from "react";
import "./LeagueDetails.css";
import { Jumbotron, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTransgender, faFlag } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

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


  return (
    <div>
      {/* Header banner container */}
      <div className="league-details">
        <img src={strLogo} style={{ width: "150px" }} alt="" />
      </div>

      <div className="container">
        {/* jumbotron league details and image */}

        <Jumbotron
          fluid
          className="league-details-container"
          style={{ backgroundColor: "#5352ed" }}
        >
          <Container className="j-container d-flex justify-content-between">
            <div>
              <h4>{strLeague}</h4>
              <p>Founded :{intFormedYear}</p>
              <p>
                <FontAwesomeIcon icon={faFlag} /> Country :{strCountry}
              </p>
              <p>
                <FontAwesomeIcon icon={faTransgender} /> Gender :{strGender}
              </p>

              <p>Sports type : {strSport}</p>
            </div>

            <div>
              <img src={strPoster} style={{ height: "200px" }} alt="" />
            </div>
          </Container>
        </Jumbotron>

        <p>{strDescriptionEN}</p>

        <br />
        <br />
        <p>{strDescriptionFR}</p>

        <div className="text-align">
          <a href={strFacebook} className="social">
            {" "}
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href={strTwitter} className="social">
            {" "}
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href={strYoutube}className="social">
            {" "}
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeagueDetails;
