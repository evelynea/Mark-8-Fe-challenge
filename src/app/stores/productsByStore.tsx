"use client";
import { useEffect, useState } from 'react';
import { json } from 'stream/consumers';

interface Product {
  id: string;
  name: string;
  description: string;
  thumbnail: string
}

export default function ProductByStore(){
  const [products, setProducts] = useState<Product[]>([]);
  const token = localStorage.getItem('authToken');
  

  async function getData() {
    console.log("token"+token)
    const response = await fetch(`https://api.mark8.awesomity.rw/products?pageNumber=1&recordsPerPage=10`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
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
      setProducts(data.data.products); // Adjust according to the actual data structure
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);
  // console.log(products)
  
  
  return(
    <>
        {products.slice(0, 3).map((product)=>(
 
        <div className="flex gap-2">
                    <div className="border-2 rounded-lg" style={{width: "250px", height:"344px"}}>
                <img src={product.thumbnail[0]} alt="product-pic" style={{height: "256px", backgroundColor:"#d1d1d1"}}/>
                <div className="p-4 text-xs flex justify-between">
                    <div>
                    <p className="font-semibold">{product.name}</p>
                    <p className="py-2">
                        <span style={{color: "#C1CF16"}}>9,000Rwf</span>
                    </p>
                    </div>
                    <div className="flex gap-2">
                    <button className="p-3 border-2 rounded-lg"><img src={`favourite.png`} alt="button" /></button>
                
                </div>
                </div>
                </div>
                {/* <div className="border-2 rounded-lg" style={{width: "250px", height:"344px"}}>
                <img src="" alt="product-pic" style={{height: "256px", backgroundColor:"#d1d1d1"}}/>
                <div className="p-4 text-xs flex justify-between">
                    <div>
                    <p className="font-semibold">Product 1</p>
                    <p className="py-2">
                        <span style={{color: "#C1CF16"}}>9,000Rwf</span>
                    </p>
                    </div>
                    <div className="flex gap-2">
                    <button className="p-3 border-2 rounded-lg"><img src={`favourite.png`} alt="button" /></button>
                
                </div>
                </div>
                </div> 
                <div className="border-2 rounded-lg" style={{width: "250px", height:"344px"}}>
                <img src="" alt="product-pic" style={{height: "256px", backgroundColor:"#d1d1d1"}}/>
                <div className="p-4 text-xs flex justify-between">
                    <div>
                    <p className="font-semibold">Product 1</p>
                    <p className="py-2">
                        <span style={{color: "#C1CF16"}}>9,000Rwf</span>
                    </p>
                    </div>
                    <div className="flex gap-2">
                    <button className="p-3 border-2 rounded-lg"><img src={`favourite.png`} alt="button" /></button>
                
                </div>
                </div>
                </div>               */}

        </div>
    ))}
    </>
  )
}