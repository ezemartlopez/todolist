import { useState , useEffect } from "react";
import darkDesktop from "@assets/ModeDarkDesktop.png";
import darkMobile from "@assets/ModeDarkMobile.png";
import lightDesktop from "@assets/ModeLightDesktop.png";
import lightMobile from "@assets/ModeLigthMobile.png";

function getImage(width, modeActive){
  return (width <= 540? (modeActive? darkMobile: lightMobile):(modeActive? darkDesktop: lightDesktop));
}

function BackGroundImage({modeActive}) {
  const [windowWidth, setWindowWidth] = useState(0);

  const deviceByWith = () => {  setWindowWidth(window.innerWidth); };

  useEffect(() => {
    deviceByWith();
    window.addEventListener('resize', deviceByWith);

    return () => {  window.removeEventListener('resize', deviceByWith); };
  }, []);

  return (
    <div style={{backgroundImage: `url(${getImage(windowWidth, modeActive)})`}} className="w-full h-full bg-cover transition-all ease-in duration-500"></div>
  )
}

export default BackGroundImage