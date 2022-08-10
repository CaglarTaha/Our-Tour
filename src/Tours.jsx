import Tour from "./Tour"

const Tours = ({tours,Remove1}) => {

    return(
        <div className="container">
            <h1>Tours Component</h1>

            <div>
{tours.map ((tour)=>{
    return(
        <Tour key={tour.id} {...tour} Remove1={Remove1}></Tour>
    )
})}
            </div>
        </div>
    )
} 

export default Tours;