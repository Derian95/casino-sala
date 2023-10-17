import { useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';
import { Mobile } from "./pages/mobileResponsive/Mobile";
import { App } from "./App";
import { dataStore } from "./store/dataStore";
import { useDataCasino } from "./hooks/api/useDataCasino";
import { Loader } from "./components/ui/Loader";
export const Principal = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 900);
      };
  
      // Escucha los cambios de tamaño de la ventana para actualizar el estado
      window.addEventListener('resize', handleResize);
  
      // Comprueba el tamaño de la pantalla al cargar la página
      handleResize();
  
      // Limpia el event listener cuando el componente se desmonta
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 900);
      };
  
      // Vuelve a comprobar el tamaño de la pantalla en cada cambio
      window.addEventListener('resize', handleResize);
  
      // Limpia el event listener cuando el componente se desmonta
      return () => window.removeEventListener('resize', handleResize);
    }, []);



    const { data: dataCasino, isSuccess, isFetching } = useDataCasino()
	const { setCasinoInfo } = dataStore()

    useEffect(() => {
		if (isSuccess && dataCasino) {
			setCasinoInfo(dataCasino.data)
		}
	}, [isSuccess, dataCasino, setCasinoInfo, isFetching])

    console.log(dataCasino)
  return (
    <div>
        <Loader/>
    {isMobile || isSmallScreen ? <Mobile /> : <App />}
    </div>
  )
};
