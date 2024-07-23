import SingleProductPage from "../products/singleproduct"

export default function Saved(){
    return(
        <>
        <div style={{backgroundColor:"#F7F8FB", marginBottom:"20px"}} className="flex flex-col items-center justify-center gap-2px-10 py-10 rounded-lg mx-14">
                  <h1 className="text-lg font-semibold">Saved Products </h1>
                  <p className="text-gray-500 text-xs">4 Saved</p>
              
        </div>
        <div className=" flex flex-wrap gap-7 mx-14">
        <SingleProductPage/>
            
            </div>
        </>
    )
}