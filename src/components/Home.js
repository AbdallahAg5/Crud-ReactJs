import React,{useState, useRef, useEffect} from 'react'
import {data} from '../data'
import './style/Home.css'
 

function Home() {

  const [question,setQuestion]=useState(0)
  const[score,setScore]=useState(0)
  const inputRef = useRef(null)
  useEffect(() => {
  console.log(inputRef.current);
  }, [])
  const NextHandler=()=>{
       setQuestion(question+1)
        
      
       }
  const PreviousHandler=()=>{
          setQuestion(question-1)
          }

     const checkHandler=(i)=>{
        console.log(i)
     }    

       

  return (
    <div className='container'>
        <div className='content' >
        <p className='score'>{score}/3</p>
      <p className='question'>{question < 3 ? data[question].question : score/3 } </p>
      {data[question].answer.map((ans,i)=><div className='answers' key={i}><input  type={'radio'} name='answer' ref={inputRef} /><p className='ans'>{ans}</p></div> )} 
      <div className='btns'>
        <button  disabled={question > 0 ? false : true }   onClick={()=>PreviousHandler()}>Previous</button>
        <button  disabled={question < 2 ? false : true }   onClick={()=>NextHandler()}>Next</button>
      </div>
    
    </div>
    </div>
  )
}

export default Home  