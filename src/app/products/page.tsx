import SingleProductPage from "./singleproduct"
import TopStores from "./topStores"


export default function ProductPage(){

 
    return(
      <>
        <div className="px-14 ">
          <div className="rounded-2xl text-white flex flex-col items-center justify-center h-screen gap-10" style={{height: "262px", backgroundColor: '#1C2834', marginTop:"30px"}}>
            <div className="flex flex-col items-center justify-center gap-2">
                  <h1 className="text-lg font-semibold">Welcome to <span style={{color: "#C1CF16"}}>Mark8</span> </h1>
                  <p className="text-gray-300 text-xs">12,932 Products</p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center px-3">
                    <img src={`/search-01.png`} alt="search icon" />
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className=" text-white text-sm rounded-lg block w-full ps-10 p-2.5"
                  placeholder="What are you looking for?"
                  style={{backgroundColor:"#243242", width:"600px"}}
                  // required
                />
                <div className="absolute inset-y-0 end-0 flex items-center">
                <img src={`filter-vertical.svg`} alt="filter" />
                </div>

                </div>
                  <div className="flex text-xs gap-1.5">
                      <button className="rounded-full border-2 px-6 py-1">All</button>
                      <button className="rounded-full border-2 px-6 py-1 border-gray-500 text-gray-300 ">Vectors</button>
                      <button className="rounded-full border-2 px-6 py-1 border-gray-500 text-gray-300">Icons</button>
                      <button className="rounded-full border-2 px-6 py-1 border-gray-500 text-gray-300">Backgrounds</button>
                  </div>
            </div>
          </div>
        
          <div className="flex justify-between items-center py-6">
            <div className="flex justify-center items-center gap-5 text-xs font-bold">
              <img src={`/mail-01.svg`} alt="cart" className="w-4 h-4 fill-yellow-500"/> Recent Products (100)
            </div>
            <div className="flex gap-2">
              <button className=" p-2 border-2"><img src={`filter.svg`} alt="filter" /></button>
              <button className="p-2 border-2"><img src={`alphabet.svg`} alt="button" /></button>
              
            </div>
          </div>

          

          <div className="flex justify-between text-xs py-8 ">
            {/* card design */}
            <div className="flex flex-col justify-center items-center gap-3">
            <div className=" flex flex-wrap gap-5">
            <SingleProductPage/>
            </div>
            <button 
                    className=" py-3 px-6 flex justify-center items-center border-2 font-bold gap-2 rounded-md text-black"> 
                    <img src={`/vector.svg`} alt="arrow" style={{color:"#c1cf16"}}/>Load More
                </button>
            </div>
            {/* top stores design */}
            
            <div className=" border-2 p-3 rounded-lg px-2" style={{width:"60%"}}>
         <div className="flex justify-between">
           <div className="flex gap-4">
             <img src={`store-02.svg`} alt="store icon"  />
             <p className="font-bold"> Top 10 Stores</p>
           </div>
           <img src={`link-square-02.svg`} alt="link square" />
         </div>
         <div className="py-4 px-2 bg-gray-100 my-4">
         <div className="relative">
           <div className="absolute inset-y-0 start-0 flex items-center px-3">
               <img src={`/search-01.svg`} alt="search icon" />
           </div>
           <input
             type="text"
             id="simple-search"
             className=" bg-white text-black text-sm rounded-lg block w-full ps-10 p-2.5"
             placeholder="Search a store"
             // style={{backgroundColor:"black"}}
             // required
           />
           <div className="absolute inset-y-0 end-0 flex items-center">
           <img src={`/filter-vertical.svg`} alt="filter" />
           </div>

           </div>
         </div>
         
         <TopStores/>
         
       </div>
          </div>
          
        </div>
      </>
    )
}