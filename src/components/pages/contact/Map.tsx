import  { useEffect} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; 
mapboxgl.accessToken = 'pk.eyJ1Ijoia2ljaGl0YW5vIiwiYSI6ImNsZGFzZXd2MTBtNDUzdm5udjR6d3p5amkifQ.vs4RtrsBOtu8whthlUOTbw';



export const Map = () => {
  useEffect(() => {
     new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/dark-v10', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      });
  }, []);
  
  return (
    <div className='w-full h-full' id='map'>.</div>
  )
}
