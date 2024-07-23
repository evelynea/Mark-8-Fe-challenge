"use client";
import { useEffect, useState } from 'react';

export default function Details(){

    const [product, setProducts] = useState([]);

    async function getData() {
        const token = localStorage.getItem('authToken');
        console.log("tokens "+token)
        const response = await fetch(`https://api.mark8.awesomity.rw/products/5ec23dc7-d445-40ae-bf04-4c48ccb5f0fd`, {
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
          setProducts(data.data); // Adjust according to the actual data structure
        }).catch(error => {
          console.error('Error fetching data:', error);
        });
      }, []);
      console.log(JSON.stringify(product))
    
    return(
        <>
        <div className="mx-14 ">
            <div className="flex text-xs gap-4 py-4">
                <img src={`/arrow-left-02.svg`} alt="" />
                <button>Home</button>
                <button>Products</button>
                <button>Vectors</button>
                <button>Product 1</button>
            </div>
            <div className="flex gap-4">
            <div className="w-2/5 rounded-lg border-2">
                <img src={`/bg-image2.svg`} alt="product picture"/>
                <div className="flex p-2">
                    <img src={`/bg-image2.svg`} alt="product picture" className="w-10 rounded-lg"/>
                    <img src={`/bg-image2.svg`} alt="product picture" className="w-10 rounded-lg"/>
                    <img src={`/bg-image2.svg`} alt="product picture" className="w-10 rounded-lg"/>
                    <img src={`/bg-image2.svg`} alt="product picture" className="w-10 rounded-lg"/>
                    <img src={`/bg-image2.svg`} alt="product picture" className="w-10 rounded-lg"/>

                </div>
            </div>
            <div className="w-3/5 rounded-lg border-2 text-gray-700">
                <div className="flex justify-between border-2 p-8">
                    <div className="flex gap-4">
                        <p className="font-bold text-xl"> Product Details</p>
                        <p className="text-xs bg-gray-100 p-2 h-6 flex items-center font-semibold rounded-lg">IN STOCK</p>
                    </div>
                    <div className="flex gap-4">
                        <button 
                            className=" py-3 px-6 flex justify-center items-center border-2 font-bold gap-2 rounded-md text-black"> 
                            <img src={`/favourite.png`} alt="like" style={{color:"#c1cf16"}}/>Save
                        </button>
                        <img src={`/more-square-01.svg`} alt="more" />

                    </div>
                </div>
                <div className="p-8">
                <p className="text-2xl font-bold">{product.name}</p>
                <p className="py-2">
                    <span style={{color: "#C1CF16"}} className="font-bold">{product.unitPrice}</span>
                    <span className="text-gray-400 px-2 text-xs">12,000 Rwf</span> 
                </p>
                <p className="font-bold py-4"> Description</p>
                <p className="text-gray-600">{product.description}</p>
                <p className="font-bold text-m">Reviews</p>
                <p className="py-2 flex gap-1">
                    <img src={`/star.svg`} alt=" star-rating " /> 4.9
                    <span className="text-gray-400 px-4 ">(14 Reviews)</span> 
                </p>
                <div className="flex gap-2">
                  <button className=" py-3 px-6 border-2 rounded-lg">-</button>
                  <button className=" px-10 bg-gray-200 rounded-lg">1</button>
                  <button className=" py-3 px-6 border-2 rounded-lg">+</button>
                  <button 
                    className="  flex justify-center items-center border-2 font-bold gap-2 rounded-md text-black px-8" style={{backgroundColor:"#c1cf16"}}> 
                    <img src={`/shopping-cart-02.png`} alt="cart"/>Add To Cart
                </button>
                </div>
                </div>
                <div className="flex justify-between border-2 p-8">
                    <div className="flex gap-2">
                        <p className="font-semibold"> Store Info:</p>
                        <img src={`/bg-image.svg`} alt="shop-color" className="rounded-full w-8 h-8" />
                        <p className="text-xs p-2 h-6 flex items-center font-semibold rounded-lg">Awesome Shop 1</p>
                    </div>
                    <button 
                    className="  flex justify-center items-center border-2 font-bold gap-2 rounded-md text-black px-8 py-3"> 
                    <img src={`/call.svg`} alt="call"/>Contact Store
                </button>
                </div>
            </div>
            </div>
            <h1 className="font-bold py-8 text-2xl">You might also like</h1>
            <div className="flex">
            <div className="border-2 rounded-lg" style={{width: "360px", height:"344px"}}>
              <img src="" alt="product-pic" style={{height: "256px", backgroundColor:"#d1d1d1"}}/>
              <div className="p-4 text-sm flex justify-between">
                <div>
                  <p className="font-semibold">Product 1</p>
                  <p className="py-2">
                    <span style={{color: "#C1CF16"}}className="font-bold">9000RWF</span>
                    <span className="text-gray-400 px-2">12,000Rwf</span> 
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className=" p-3 border-2 rounded-lg"><img src={`shopping-cart-02.png`} alt="filter" /></button>
                  <button className="p-3 border-2 rounded-lg"><img src={`favourite.png`} alt="button" /></button>
              
            </div>
              </div>
            </div>
            </div>

        </div>
        </>
    )
}