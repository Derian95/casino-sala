import { SideBarResponsive } from "../../components/ui/mobileResponsive/SideBarResponsive"
import { HomeMobile } from "./sections/HomeMobile"
import { AboutMobile } from "./sections/AboutMobile"
import { EventsMobile } from "./sections/EventsMobile"
import { ContactMobile } from "./sections/ContactMobile"

export const Mobile = () => {
   
	return (
        <div className='bg-gray-950 w-full h-fit '>
            <SideBarResponsive/>
            <main className=" max-w-[100vw] overflow-hidden ">
                <HomeMobile/>
                <AboutMobile/>
                <EventsMobile/>
                <ContactMobile/>
            </main>
        </div>
    )
}

