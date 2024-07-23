"use client";
import { useEffect, useState } from 'react'; 

type Store = {
  name: string;
  id:string;
  thumbnail: string
}

export default function ProductByID(){

const [token, setToken] = useState("");
    const [stores, setStores] = useState<Store[]>([]);
    useEffect(() => {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
        setToken(authToken);
      }
    }, []);
  
  async function getData() {
    console.log("token"+token)
    const response = await fetch(`https://api.mark8.awesomity.rw/store`, {
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
    console.log(data)
    return data;
  }

  useEffect(() => {
    getData().then(data => {
      setStores(data.data.stores); 
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);
  console.log(stores)

    return(
        <>
        <div className="flex gap-4">
            <div className="w-2/5 rounded-lg border-2">
                <img src={`/bg-image2.svg`} alt="product picture"/>
                <div className="flex p-2">
                    <img src={`/bg-image2.svg`} alt="product picture" className="w-10 rounded-lg" />
                    <img src={`/bg-image2.svg`} alt="product picture" className="w-10 rounded-lg"/>
                    <img src={`/bg-image2.svg`} alt="product picture" className="w-10 rounded-lg"/>
                    <img src={`/bg-image2.svg`} alt="product picture" className="w-10 rounded-lg"/>
                    <img src={`/bg-image2.svg`} alt="product picture" className="w-10 rounded-lg"/>

                </div>
            </div>
            <div className="w-3/5 rounded-lg border-2 text-gray-700">
                <div className="flex justify-between border-2 ">
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
                <p className="text-2xl font-bold">Product 5</p>
                <p className="py-2">
                    <span style={{color: "#C1CF16"}} className="font-bold">9,000 Rwf</span>
                    <span className="text-gray-400 px-2 text-xs">12,000 Rwf</span> 
                </p>
                <p className="font-bold py-4"> Description</p>
                <p className="text-gray-600">A cozy boutiqoe offering a curated selection of unique, high-quality clothhing and accessories for fashion-forward individuals.</p>
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
                <div className="flex justify-between border-2 ">
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
        </>
    )
}