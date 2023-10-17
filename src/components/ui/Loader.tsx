import {  useLayoutEffect } from "react"
import { gsap, CSSPlugin, Expo } from "gsap";
gsap.registerPlugin(CSSPlugin);

export const Loader = () => {
    
    
    const reveal = () => {
        const t1 = gsap.timeline({
          onComplete: () => {
            console.log("completed");
          },
        });
        t1.to(".line", {
          width: "100%",
          ease: Expo.easeInOut,
          duration: 1.2,
          delay: 0.7,
        })
          .to(".line", {
            height: "100%",
            ease: Expo.easeInOut,
            duration: 0.7,
            delay: 0.5,
          })
          .to(".welcome", {
            opacity: 1,
            ease: Expo.easeInOut,
            duration: 0.7,
            delay: 0.5,
          })
          .to(".line", {
            height: "0%",
            ease: Expo.easeIn,
            duration: 0.7,
            delay: 0.5,
          })
          .to(".containLoader", {
            translateX: "100%",
            opacity:0,
            ease: Expo.easeInOut,
            duration: 0.7,
            delay: 0,
          })
          .to(".sidebar-container",{
            opacity:1,
            
            ease: Expo.easeIn,
            duration: 0.2,
            delay: 0,
          })
          .to(".salaName",{
            opacity:1,
            ease: Expo.easeIn,
            translateY:0,
            duration: .5,
            delay: 0,
          })
          .to(".address",{
            opacity:1,
            ease: Expo.easeIn,
            duration: .5,
            delay: 0,
          })
          
      };
    useLayoutEffect(() => {
        reveal()
       }, []);




	return (
        <div className="containLoader fixed  loader-contain w-screen h-screen bg-black z-[1000] flex justify-center items-center "  >
            <div className="line absolute h-2 w-0  bg-red-800 flex justify-center items-center">
                <h1 className="welcome text-5xl font-black text-white opacity-0">BIENVENIDOS</h1>
            </div>
        </div>
    )
}
