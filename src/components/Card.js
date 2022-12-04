import React,{useContext} from "react";
import style from "./style/Card.module.css";
import { motion } from "framer-motion/dist/framer-motion";
import  {Theme}  from "./Context";


function Card({ firstName, lastName, img, group,dateNass,id}) {
    const theme=useContext(Theme)
    const date=new Date()
 
   
  return (
    <div className={style.card} style={{ backgroundColor: theme ? "#3F4E4F" : "#A27B5C" }}>
      <div className={style.ImgContainer} >
        <motion.img
          className={style.img}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.1 }}
          src={img}
          alt="pic"
        />
      </div>
    <div className={style.InfoContainer}>
      <p>FirstName: <s>{firstName.charAt(0).toUpperCase() + firstName.slice(1)}</s></p>
      <p>LastName: <s>{lastName.charAt(0).toUpperCase() + lastName.slice(1)}</s></p>
      <p>Group:<s>{group.charAt(0).toUpperCase() + group.slice(1)}</s></p>
      <p>Age:<s>{date.getFullYear() - new Date(dateNass).getFullYear()}</s> </p>
      <p className={style.id}>Id:<s>{id}</s> </p>
    </div>
    </div>
  );
}

export default Card;
