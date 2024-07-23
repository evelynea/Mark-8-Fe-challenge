"use client";
import { useEffect, useState } from 'react';
import ProductByStore from './productsByStore';


type Store = {
  name: string;
  id:string;
  image:string;
  description:string
  // Add other properties of the store object here
};

export default function SingleStore(){
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
      setStores(data.data.stores); // Adjust according to the actual data structure
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);
  console.log(stores)

    return(
        <>
        {stores.map((store)=>( 
        <div className=" rounded-lg border-2 text-gray-700 my-8">
                <div className="flex justify-between border-2 p-8">
                <div className="flex justify-center items-center gap-4 text-xs">
                  <img src={store.image} alt="store image" className='w-10 h-10 rounded-lg'/>
                  <div className="">
                    <p className="font-semibold py-2"> {store.name}</p>
                    <p className="text-gray-500 ">134 Products</p>
                  </div>
                </div>
                    <div className="flex gap-4">
                    <button 
                    className="flex justify-center items-center border-2 font-bold gap-2 rounded-md text-black px-8" style={{backgroundColor:"#c1cf16"}}> 
                    <img src={`/user.png`} alt="cart"/>View Profile
                    </button>
                    <button className="p-3 border-2 rounded-lg"><img src={`call.svg`} alt="button" /></button>
                    <button className="p-3 border-2 rounded-lg"><img src={`favourite.png`} alt="button" /></button>
                    
                    </div>
                </div>
                <div className="p-8 flex justify-between">
                <div className="w-1/2 text-xs p-6">
                    
                    <p className="font-bold py-4"> About</p>
                    <p className="text-gray-600">{store.description}</p>
                    <div className="py-4">
                    <p className="font-bold"> Categories</p>
                    <div className="flex text-xs gap-1.5 py-4">
                      <button className="rounded-full border-2 px-3 py-1">Vectors</button>
                      <button className="rounded-full border-2 px-3 py-1">Backgrounds</button>
                    </div>
                    </div>
                    <p className="font-bold text-m">Reviews</p>
                    <p className="py-2 flex gap-1">
                        <img src={`/star.svg`} alt=" star-rating " /> 4.9
                        <span className="text-gray-400 px-4 ">(14 Reviews)</span> 
                    </p>
                    <button 
                        className=" py-3 my-10 flex justify-center items-center border-2 font-bold gap-2 rounded-md text-black px-8"> 
                        <img src={`/store-02.svg`} alt="cart"/>Explore Products
                    </button>
                    
                </div>
                <ProductByStore/>
                </div>
                
        </div>
        ))}
        </>
          
    )
}