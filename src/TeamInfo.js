import React from "react";

import "./TeamInfo.css";

const TeamInfo = props => {
  const { image } = props;
  return (
    <div className="TeamInfo">
      <img src={image.images.fixed_width.url} alt={image.source_tld} />
    </div>
  );
};

export default TeamInfo;
