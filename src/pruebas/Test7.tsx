import { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';

export const Test7 = () => {

  useEffect(() => {
    Scrollbar.init(document.body, {damping:1});
  }, []);
  
  return (
    <div className='h-screen'>
      <div className='h-screen w-screen bg-red-700'></div>
      <div className='h-screen w-screen bg-green-700'></div>
      <div className='h-screen w-screen bg-orange-700'></div>
      <div className='h-screen w-screen bg-purple-700'></div>
  </div>
  )
}
