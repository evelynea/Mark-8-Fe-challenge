import SingleStore from "./singleStore";

export default function Stores(){
    return(
        <>
        <div className="p-14">
        <div className="rounded-2xl flex flex-col items-center justify-center h-screen gap-10 " style={{height: "262px", backgroundColor: '#F7F8FB'}}>
            <div className="flex flex-col items-center justify-center gap-2">
                  <h1 className="text-lg font-semibold"><span style={{color: "#C1CF16"}}>Mark8</span> Stores</h1>
                  <p className="text-gray-500 text-xs">54 Stores</p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center px-3">
                    <img src={`/search-01.png`} alt="search icon" style={{
                        // filter: "invert(60%) sepia(70%) saturate(377%) hue-rotate(351deg) brightness(98%) contrast(100%)"}} />
                    color:"#c1cf16"}}/>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className=" text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 outline: none"
                  placeholder="What are you looking for?"
                  style={{ backgroundColor:"#E8EBED",width:"600px"}}
                  
                  // required
                />
                <div className="absolute inset-y-0 end-0 flex items-center">
                <img src={`filter-vertical.svg`} alt="filter" />
                </div>

                </div>
                  <div className="flex text-xs gap-1.5">
                      <button className="rounded-full border-2 px-6 py-1">All</button>
                      <button className="rounded-full border-2 px-6 py-1">Vectors</button>
                      <button className="rounded-full border-2 px-6 py-1">Icons</button>
                      <button className="rounded-full border-2 px-6 py-1">Backgrounds</button>
                  </div>
            </div>
          </div>
          {/* card design */}

          <SingleStore />
          
          
            <button 
                    className=" py-3 px-6 flex justify-center items-center border-2 font-bold gap-2 rounded-md text-black" style={{margin:"auto"}}> 
                    
                    <img src={`/vector.svg`} alt="arrow" />Load More
                </button>
        </div>        
        </>
    )
}