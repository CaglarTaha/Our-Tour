import   "./App.css"

const Tour = ({ id, image, info, price, name ,Remove1}) => {
    console.log(info)
  return (
    

    <article className='Card'>
        <img className="Image" src={image} alt={name}></img>
        <div className='Card-Content'>
        <div className="Row">
            <h4 className="Row">{name} <span className="price "> ${price} </span> </h4>
        </div>
        
        <p>{info}</p>
        <button className="Button1" onClick={()=> Remove1(id)}>Not my Tour</button>
        </div>


        
        
        
    </article>
  )
}

export default Tour
