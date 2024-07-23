"use client";
import { log } from 'console';
import { useEffect, useState } from 'react';



type Store = {
  name: string;
  id:string;
  image:string;
  description:string
  
};

export default function TopStores(){
  const [stores, setStores] = useState<Store[]>([]);
    const authToken = localStorage.getItem('authToken');
    
  
  async function getData() {
    console.log("token .."+ authToken)
    const response = await fetch(`https://api.mark8.awesomity.rw/store`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`,
      },
    });

    if (!response.ok) {
      // Handle the error
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    return data;
  }

  useEffect(() => {
    getData().then(data => {
      setStores(data.data.stores); 
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);
  console.log("Top stores: " +stores)
  

    return(
        <>
        {stores.map((store)=>( 
          <div className="flex justify-between items-center py-2">
           <div className="flex justify-center items-center gap-4">
             <img src={store.image} alt="store image" className='w-10 h-10 rounded-lg'/>
             <div className="">
               <p className="font-semibold py-2">{store.name}</p>
               <p className="text-gray-500 ">134 Products</p>
             </div>

           </div>
           <img src={`/arrow-down-01.svg`} alt="arrow down" />
         </div> 
        ))}
        </>
          
    )
  }