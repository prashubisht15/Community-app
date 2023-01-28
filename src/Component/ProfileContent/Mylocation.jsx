import React, { useEffect } from "react";

const Mylocation = () => {
    const lat=1.305385;
    const lon=30.923029;
    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
    return(
        <>
            <iframe id="iframeId" height="100%" width="100%" frameborder="0" border="0"></iframe>
        </>
    );
}

export default Mylocation
