import React from "react";
import {  Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const Team = (props) => {
  const { strLeague, strSport, strLogo, idLeague, strBadge } = props.lg;

  return (
    <Link to={`/teams/${idLeague}`}>
      <div className="card-container">
        <img style={{ width: "100px" }} src={strBadge} alt="" />

        <div>
          <h5>{strLeague}</h5>
          <p>{strSport} </p>

          <Button variant="primary">
            Explore <FontAwesomeIcon icon={faLongArrowAltRight} />
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default Team;
