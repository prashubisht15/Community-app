import React, { useEffect } from "react";

const Mylocation = ({ lat, lng }) => {
  useEffect(() => {
    const ifameData = document.getElementById("iframeId");
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lng}&hl=es;&output=embed`;
  });
  return (
    <>
      <iframe
        id="iframeId"
        height="100%"
        width="100%"
        frameborder="0"
        border="0"
      ></iframe>
    </>
  );
};

export default Mylocation;
