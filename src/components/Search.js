import React, { useEffect, useState, useRef } from "react";
import style from "./style/Search.module.css";
import Animation from "./Animation";
import { BiSearchAlt } from "react-icons/bi";
import Card from "./Card";
import { motion } from "framer-motion/dist/framer-motion";
import {Link} from 'react-router-dom'

function Blog({ student, setSearched,setDisable }) {
  const SearchInput = useRef(null);
  const [clicked, setClicked] = useState(false);
  const [val, setVal] = useState("");
  const InputHandler = (e) => {
    setVal(e.target.value);
    if (clicked == true) {
      setClicked(false);
    }

  };
       if (val=='') {
              setDisable(true)
       } 
    
       useEffect(() => {
        SearchInput.current.focus();
      }, []);    

  const HandleSearch = () => {
    setClicked(true);
  };

  function renderStudent(studentArr, studentId) {
    const studentsFiltered = studentArr.find((ele) => ele.id == studentId);
    let student;

    if (!studentsFiltered || studentsFiltered.length === 0) {
      setDisable(true)
      return <div className={style.nothing}>Nothing here</div>;
    }else{
      student = studentsFiltered;
      setSearched(student);
      setDisable(false)
    }

    
    return (
      <motion.div
        style={{ marginTop: "50px", width: "300px", height: "auto" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Card
          firstName={student.firstName}
          lastName={student.lastName}
          img={student.image}
          group={student.group}
          dateNass={student.dateNass}
          id={student.id}
        />
         <Link to={'/update'} >
       <input
         className={style.Update}
          type="button"
          style={{  backgroundColor: 'green'}}
          value="Update"
        />
        </Link>
      </motion.div>
    );
  }

  return (
    <Animation>
      <div className={style.searchContainer}>
        <div className={style.inputDiv}>
          <input
             
            ref={SearchInput}
            className={style.search}
            type={"number"}
            onChange={InputHandler}
            value={val}
            placeholder="Search By Id"
          />
          <BiSearchAlt
            className={style.SearchBtn}
            onClick={HandleSearch}
            ref={SearchInput}
          ></BiSearchAlt>
        </div>
         {val=='' &&   <p className={style.please}>please search before updating !!</p>}
        <div className={style.msj}>
          {clicked == true && <> {renderStudent(student, val)} </>}
        </div>
      </div>
    </Animation>
  );
}

export default Blog;
