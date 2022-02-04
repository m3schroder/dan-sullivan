import React from "react";
import { SocialIcon } from "react-social-icons";

const MediaLinks = ({ wh = 45 }) => {
  return (
    <>
      <SocialIcon
        url="https://www.facebook.com/MiraculousCarpetCare/"
        style={{ height: wh, width: wh }}
        fgColor="white"
      />
      <SocialIcon
        url="mailto:miraculouscarpetcare@gmail.com"
        style={{ height: wh, width: wh }}
        fgColor="white"
      />
      <SocialIcon
        url="https://nextdoor.com/pages/miraculous-carpet-franklin-tn/"
        style={{ height: wh, width: wh }}
        fgColor="white"
      />
    </>
  );
};

export default MediaLinks;
