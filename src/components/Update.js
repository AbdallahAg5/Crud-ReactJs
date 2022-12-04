import React, { useState, useRef, useEffect,useContext } from "react";
import style from "./style/Form.module.css";
import {Theme} from './Context'
import {Link,Navigate} from 'react-router-dom'
import Animation from "./Animation";
import { motion } from "framer-motion/dist/framer-motion";

function Update({ setStudent, student, searched,setDisable }) {
  const theme=useContext(Theme) 
  const InputName = useRef(null);
  const InputLastName = useRef(null);
  const InputDate = useRef(null);
  const Select = useRef(null);
  const [click, setClick] = useState(false);
  const [go, setGo] = useState(false);

  const [values, setValues] = useState({
    id: searched.id,
    firstName: searched.firstName,
    lastName: searched.lastName,
    dateNass: searched.dateNass,
    group: searched.group,
    image: "https://i.pravatar.cc/200",
  });

  const { firstName, lastName, dateNass, group } = values;
      
  if (searched.id==undefined) {
        return   <Navigate to='/search' />
  }

  useEffect(() => {
    InputName.current.focus();
  }, []);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const DeleteHandler = () => {
    
    window.confirm("Delete !!!") &&
        setStudent(
          student.filter((singleStudent) => singleStudent.id !== values.id)
    );
     setDisable(true)
    
    
  };

  console.log(searched.id)

  const UpdateHandler = () => {
    setClick(true);
    values.firstName.trim() == ""
    ? (InputName.current.style.border = "2px solid red")
    : (InputName.current.style.border = "2px solid black");

  values.lastName.trim() == ""
    ? (InputLastName.current.style.border = "2px solid red")
    : (InputLastName.current.style.border = "2px solid black");

    values.dateNass == ""
    ? (InputDate.current.style.border = "2px solid red")
    : (InputDate.current.style.border = "2px solid black");    

    values.group == "Select Group"
    ? (Select.current.style.border = "2px solid red")
    : (Select.current.style.border = "2px solid black");  

  if (
    InputLastName.current.value != "" &&
    InputName.current.value != "" &&
    Select.current.value != 1 &&
    InputDate.current.value != ""
  ) {
      
      searched.firstName = firstName;
      searched.lastName = lastName;
      searched.group = group;
      searched.dateNass = dateNass;
      setGo(true)
  }
  
    
  };

  

  return (
   <Animation>
      <div className={style.ajoutContainer}>
      <div
        className={style.ajoutContent}
        style={{ backgroundColor: theme ? "#3F4E4F" : "#A27B5C" }}
      >
         <h1 className={style.UpdateTitle}>Update Student</h1>
        <input
          value={values.firstName}
          className={style.InputText}
          type={"text"}
          ref={InputName}
          name="firstName"
          onChange={(e) => inputHandler(e)}
          placeholder="FirstName"
        />
        <br />
        {click == true ? (
          values.firstName.trim() == "" ? (
            <p className={style.error}>Invalid FirstName</p>
          ) : null
        ) : null}
        <input
          value={values.lastName}
          className={style.InputText}
          ref={InputLastName}
          type={"text"}
          name="lastName"
          onChange={(e) => inputHandler(e)}
          placeholder="LastName"
        />
        <br />
        {click == true ? (
          values.lastName.trim() == "" ? (
            <p className={style.error}>Invalid LastName</p>
          ) : null
        ) : null}
        <input
          value={values.dateNass}
          ref={InputDate}
          className={style.DateInput}
          type={"date"}
          name="dateNass"
          onChange={(e) => inputHandler(e)}
          placeholder="dateNass"
        />
        <br />
        {click == true ? (
          new Date(values.dateNass) == new Date() ? (
            <p className={style.error}>Select Date</p>
          ) : null
        ) : null}
        <select
          ref={Select}
          value={values.group}
          className={style.select}
          name="group"
          onChange={(e) => inputHandler(e)}
        >
          <option defaultValue={true}>Select Group</option>
          <option value={"Group1"}>Group1</option>
          <option value={"Group2"}>Group2</option>
          <option value={"Group3"}>Group3</option>
          <option value={"Group4"}>Group4</option>
        </select>
        <br />
        {click == true ? (
          values.group == 'Select Group' ? (
            <p className={style.error}>Select Group</p>
          ) : null
        ) : null}
       <div className={style.Btns}>
       <Link to="/list" > <motion.input
          whileHover={{scale:[1,1.1,1,1.1,1]}}
          className={style.Delete}
          type="button"
          onClick={DeleteHandler}
          value="Delete"
        /></Link>
       <Link to={go && '/list' } >
       <motion.input
         whileHover={{scale:[1,1.1,1,1.1,1]}}
          className={style.Update}
          type="button"
          onClick={UpdateHandler}
          value="Update"
        />
       </Link>
       </div>
      </div>
    </div>
   </Animation>
  );
}

export default Update;
