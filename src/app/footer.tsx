export default function Footer(){
    return(  
        <>
        <div className="py-8 flex flex-col gap-6">
        <div style={{backgroundColor:"#F7F8FB"}} className="flex justify-between px-10 py-10 rounded-lg mx-14">
            <p className="font-bold text-xl">
              <span style={{color: "#C1CF16"}} >Open</span> your Store</p>
            <div className="flex gap-4">
            {/* <div className="py-4 px-2 bg-gray-100 my-4"> */}
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center px-3">
                    <img src={`/mail-01.svg`} alt="search icon" />
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className=" bg-white text-black text-sm rounded-lg block w-full ps-10 p-2.5"
                  placeholder="Enter your Email"
                  style={{backgroundColor:"#F5F5F5",width:"400px"}}
                  // required
                />
                </div>
              
              <button 
                    className="  flex justify-center items-center border-2 font-bold gap-2 rounded-md text-black px-8" style={{backgroundColor:"#c1cf16"}}> Submit
                    <img src={`/arrow-right-02.svg`} alt="arrow"/>
                </button>
            </div>
          </div>
        <div className="flex items-center justify-between py-6 px-14 text-xs text-gray-600" style={{backgroundColor:"#F4F5F6"}}>
            <div className="flex gap-2">
                <img src= {`/mark8-logo.png`} alt="Logo" className='w-10 h-10' />
                <p className="font-bold text-black py-3">Mark8</p>
            </div>
            <div className="flex gap-4">
                <p className="font-bold text-black flex"><img src={`/©2024. Beninging.png`} alt="sign" className="w-3 h-3 my-0.5" /> 2024. Mark8</p>
                <p>By Awesomity Ltd</p>
            </div>
            <div className="flex gap-5">
                <img src={`/new-twitter.svg`} alt="twitter" />
                <img src={`/instagram.svg`} alt="instagram" />
                <img src={`/youtube.svg`} alt="youTube" />
                <img src={`/linkedin-02.svg`} alt="linkedin" />
            </div>
        </div>
        </div>
        </>      
    )
}