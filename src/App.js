import './App.css';  
import React ,{useState,useEffect} from 'react'
import Loading from './loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading,setLoading] = useState(true);
const [tours,setTours] = useState([]);

const Remove1 = (id) =>{
  const newremove = tours.filter((tour)=> tour.id !==id );
  setTours(newremove);
 };
 const fetchTours = async () => {
 setLoading(true);
 
 
   
try {
  const response = await fetch(url);
  const tours = await response.json();
  const lengt = await tours.length;
  console.log(tours)
  console.log(lengt);
  setLoading(false);
  setTours(tours);
}catch(error ){
setLoading(false)
console.log(error)
}


 };

useEffect(()=> {
  fetchTours();
}, [] )

if(tours.length === 0){
  return(
    <div className='container'>
      <h2>No Tours Avaible or Server Problem</h2>
      <button className='Button1'>Refresh</button>
    </div>
  )
}



  return (
    <div className="App">
      {loading ?  <Loading/> : <Tours  tours= {tours} Remove1={Remove1} /> }
      
    </div>
  );
} 

export default App;
