import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
const Copyrights = () => {
  return (
    <div className="bottom-section">
      <p>
        <FontAwesomeIcon icon={faCopyright} />
        2022 copyright: easygifts.com
      </p>
      <p>
        Made with <FontAwesomeIcon className="heart" icon={faHeart} /> by
        Easy Gifts
      </p>
    </div>
  );
};

export default Copyrights;
