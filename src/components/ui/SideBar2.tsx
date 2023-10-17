

import { motion } from "framer-motion"
const sentence ={
    hidden:{opacity:1},
    visible:{
        opacity:1,
        transition:{
            staggerChildren:0.5,
            delayChildren:6
        }
    }
}

const letter = {
    hidden:{opacity:0, y:10,rotate:270},
    visible:{
        opacity:1,
        y:0
    }
}


export const SideBar2 = () => {
  return (
    <motion.div variants={sentence} initial="hidden" animate="visible"  className="sidebar-container  h-screen bg-black fixed opacity-0 z-20 flex justify-between flex-col -translate-x-full sm:translate-x-0  w-16  ">
        <motion.a  variants={letter} href="#ra"  >Contacto</motion.a>
        <motion.a  variants={letter}>Contacto</motion.a>
        <motion.a  variants={letter}>Contacto</motion.a>
        <motion.a  variants={letter}>Contacto</motion.a>
        <motion.a  variants={letter}>Contacto</motion.a>
    </motion.div>
  )
}
