import React, { useState, useRef, useEffect, useContext } from "react";
import style from "./style/Form.module.css";
import { motion } from 'framer-motion/dist/framer-motion'
import Animation from "./Animation";
import { Theme } from "./Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

var count = 7;

function AddStudent({ setStudent, student }) {
  const theme=useContext(Theme)
  const InputName = useRef(null);
  const InputLastName = useRef(null);
  const InputDate = useRef(null);
  const Select = useRef(null);
  const [click, setClick] = useState(false);

  const [values, setValues] = useState({
    id: "",
    image: '',
    firstName: "",
    lastName: "",
    dateNass: '',
    group: ""
  });

  const { firstName, lastName, dateNass, group } = values;

  useEffect(() => {
    InputName.current.focus();
  }, []);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const animation = {
    initial: {scale:0},
    animate:{ scale:1, transition: { duration: 1 }},
    hover:{scale:[1,1.1,1,1.1,1]}
  };

  const FormHandler = () => {
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

      values.group == ""
      ? (Select.current.style.border = "2px solid red")
      : (Select.current.style.border = "2px solid black");    

    if (
      InputLastName.current.value != "" &&
      InputName.current.value != "" &&
      Select.current.value != 1 &&
      InputDate.current.value != ""
    ) {
      student.push({
        id: ++count,
        image: "https://i.pravatar.cc/200",
        firstName: firstName,
        lastName: lastName,
        dateNass: dateNass,
        group: group,
      });

      toast.success("Well Done !!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      InputLastName.current.value = "";
      InputName.current.value = "";
      InputDate.current.value = "";
      Select.current.value = 1;
    }
  };

  console.log(values);
  return (
       <Animation>
            <div className={style.ajoutContainer}>
      <motion.div
        initial={{y:'-1000'}}
        animate={{y:'0'}}
        transition={{ type: "spring", duration: 0.8 , bounce: 0.30,duration:1}}
        className={style.ajoutContent}
        style={{ backgroundColor: theme ? "#3F4E4F" : "#A27B5C" }}
      >
        <h1 className={style.AddTitle}>Add Student</h1>
        <input
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
          ref={InputDate}
          className={style.DateInput}
          type={"date"}
          name="dateNass"
          onChange={(e) => inputHandler(e)}
          placeholder="dateNass"
        />
        <br />
        {click == true ? (
          values.dateNass == '' ? (
            <p className={style.error}>Select Date</p>
          ) : null
        ) : null}
        <select
          ref={Select}
          className={style.select}
          name="group"
          onChange={(e) => inputHandler(e)}
        >
          <option value={1} defaultValue={true}>
            Select Group
          </option>
          <option value={"Group1"}>Group1</option>
          <option value={"Group2"}>Group2</option>
          <option value={"Group3"}>Group3</option>
          <option value={"Group4"}>Group4</option>
        </select>
        <br />
        {click == true ? (
          values.group == 0 ? (
            <p className={style.error}>Select Group</p>
          ) : null
        ) : null}
        <motion.input
          variants={animation}
          initial='initial'
          animate='animate'
          whileHover='hover'
          whileTap={{ scale: 0.9 }}
          className={style.btn}
          type="button"
          onClick={FormHandler}
          value="Add Student"
        />
      </motion.div>
      <ToastContainer />
    </div>
       </Animation>
  );
}


export default AddStudent;
