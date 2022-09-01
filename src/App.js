
import { useRef } from 'react';
import { useState } from 'react';
import './App.css';
import { data as emojiList } from './components/Data';


function App() {
  const [valor,setValor] = useState(emojiList);
  const [numero , setNumero] = useState(0);
  const colorBody = useRef(null);
  const colorBodyAngle = useRef(null);

  const handleClickWhite = () =>

{
  colorBody.current.style.backgroundColor = 'white';
  colorBodyAngle.current.style.backgroundColor = 'white';

  
}
const handleClickRed = () =>

{
  colorBody.current.style.backgroundColor = 'red';
  colorBodyAngle.current.style.backgroundColor = 'red';

  
}

const handleClickYellow = () =>

{
  colorBody.current.style.backgroundColor = 'Yellow';
  colorBodyAngle.current.style.backgroundColor = 'yellow';


  
}
const handleClickGreen= () =>

{
  colorBody.current.style.backgroundColor = 'lightGreen';
  colorBodyAngle.current.style.backgroundColor = 'lightgreen';


  
}
  const handleClick = () =>{
   setNumero(numero+1)

   if(numero === valor.length -1)
    setNumero(0)
   console.log(numero)
  }

  return (
  <>
      <div className="container_circle_color">
               <div  className='circle1' onClick={handleClickWhite}></div>
               <div className='circle2' onClick={handleClickRed}></div>
               <div className='circle3'  onClick={handleClickYellow}></div>
               <div className='circle4' onClick={handleClickGreen}></div>
          
         </div>
        <div className='container' ref={colorBodyAngle}>{
     
         (<div className='container_emoji' ref={colorBody}>
           <p className='emoji'onClick={handleClick}>{valor[numero].symbol}</p>
         </div>)
         
         
        
        }
      
        </div>
  </>

  
    );
}

export default App;
