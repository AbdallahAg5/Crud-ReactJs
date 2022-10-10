import React, { useState, useRef, useEffect } from "react";
import { data } from "../data";
import "./style/Home.css";

function Home() {
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const aRef = useRef(null);
  const bRef = useRef(null);
  const cRef = useRef(null);
  const dRef = useRef(null);
  const NextHandler = () => {
    setQuestion(question + 1);
    const choosen = data[question+1].choosen;
    if (choosen !== "") {
      if (choosen === "a") {
        aRef.current.checked = true;
      } else if (choosen === "b") {
        bRef.current.checked = true;
      } else if (choosen === "c") {
        cRef.current.checked = true;
      } else if (choosen === "d") {
        dRef.current.checked = true;
      }
    } else {
      aRef.current.checked = false;
      bRef.current.checked = false;
      cRef.current.checked = false;
      dRef.current.checked = false;
    }

    console.log(data[question].choosen);
  };
  const PreviousHandler = () => {
    setQuestion(question - 1);
    const choosen = data[question-1].choosen;
    if (choosen !== "") {
      if (choosen === "a") {
        aRef.current.checked = true;
      } else if (choosen === "b") {
        bRef.current.checked = true;
      } else if (choosen === "c") {
        cRef.current.checked = true;
      } else if (choosen === "d") {
        dRef.current.checked = true;
      }
    } else {
      aRef.current.checked = false;
      bRef.current.checked = false;
      cRef.current.checked = false;
      dRef.current.checked = false;
    }
  };

  const checkHandler = (i) => {
    console.log(i);
  };

  const setChoosen = (opt) => {
    data[question].choosen = opt;
  };

  return (
    <div className="container">
      <div className="content">
        <p className="score">{score}/3</p>
        <p className="question">
          {question < 3 ? data[question].question : score / 3}{" "}
        </p>
        {/* {data[question].answer.map((ans,i)=><div className='answers' key={i}><input  type={'radio'} name='answer' ref={inputRef} /><p className='ans'>{ans}</p></div> )}  */}

        <div className="answers">
          <input
            type="radio"
            name="answer"
            onClick={() => setChoosen("a")}
            ref={aRef}
          />{" "}
          <p className="ans">{data[question].a}</p>
        </div>
        <div className="answers">
          <input
            type="radio"
            name="answer"
            onClick={() => setChoosen("b")}
            ref={bRef}
          />{" "}
          <p className="ans">{data[question].b}</p>
        </div>
        <div className="answers">
          <input
            type="radio"
            name="answer"
            onClick={() => setChoosen("c")}
            ref={cRef}
          />{" "}
          <p className="ans">{data[question].c}</p>
        </div>
        <div className="answers">
          <input
            type="radio"
            name="answer"
            onClick={() => setChoosen("d")}
            ref={dRef}
          />{" "}
          <p className="ans">{data[question].d}</p>
        </div>

        <div className="btns">
          <button
            disabled={question > 0 ? false : true}
            onClick={() => PreviousHandler()}
          >
            Previous
          </button>
          <button
            disabled={question < 2 ? false : true}
            onClick={() => NextHandler()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
