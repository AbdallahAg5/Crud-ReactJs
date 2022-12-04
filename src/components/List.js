import React, { useState,useContext } from "react";
import Card from "./Card";
import style from "./style/List.module.css";
import { Theme } from "./Context";
import Animation from "./Animation";
import { motion } from "framer-motion/dist/framer-motion";

function List({ student }) {
  const theme=useContext(Theme)
  const [clicked, setClicked] = useState(false);
  const SortHandler = () => {
    setClicked(true);
    student.sort((a, b) =>
      a.firstName > b.firstName ? 1 : b.firstName > a.firstName ? -1 : 0
    );
  };

  return (
    <Animation>
      <motion.button whileHover={{scale:[1,1.1,1,1.1,1]}} className={style.SortBtn} style={theme ? {backgroundColor:"white",color:'#3F4E4F'} : {backgroundColor:"#3F4E4F",color:'white'} } onClick={SortHandler}>Sort By FirstName</motion.button>
      <div className={style.ListContainer}>
        {clicked == false ? (
          <>
            {student.map((ele) => {
              return (
                <div style={{ width: "80%", justifySelf: "center" }}>
                  {" "}
                  <Card
                    firstName={ele.firstName}
                    lastName={ele.lastName}
                    img={ele.image}
                    group={ele.group}
                    dateNass={ele.dateNass}
                    id={ele.id}
                  />
                </div>
              );
            })}
          </>
        ) : (
          <>
            {student
              .map((ele) => {
                return (
                  <div style={{width:'80%',justifySelf:"center"}}>
                  <Card
                    firstName={ele.firstName}
                    lastName={ele.lastName}
                    img={ele.image}
                    group={ele.group}
                    dateNass={ele.dateNass}
                    id={ele.id}
                  />
                  </div>
                );
              })
              .sort((a, b) =>
                a.firstName > b.firstName
                  ? 1
                  : b.firstName > a.firstName
                  ? -1
                  : 0
              )}
          </>
        )}
      </div>
    </Animation>
  );
}

export default List;
