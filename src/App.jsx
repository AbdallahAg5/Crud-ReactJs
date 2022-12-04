import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { FiSun } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Search from "./components/Search";
import AddStudent from "./components/AddStudent";
import List from "./components/List";
import Update from "./components/Update";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import { Theme } from "./components/Context";
import { useRef } from "react";


function App() {
  const App = useRef(null);
  const [disable, setDisable] = useState(true);
  const [student, SetStudent] = useState([
    {
      id: 1,
      image: "https://i.pravatar.cc/",
      firstName: "abdo",
      lastName: "ag",
      dateNass: "2003-12-05",
      group: "Group1",
    },
    {
      id: 2,
      image: "https://i.pravatar.cc/",
      firstName: "ziko",
      lastName: "ar",
      dateNass: "2000-12-05",
      group: "Group2",
    },
    {
      id: 3,
      image: "https://i.pravatar.cc/",
      firstName: "anas",
      lastName: "as",
      dateNass: "1980-12-05",
      group: "Group3",
    },
    {
      id: 4,
      image: "https://i.pravatar.cc/",
      firstName: "fati",
      lastName: "fa",
      dateNass: "2009-12-05",
      group: "Group3",
    },
    {
      id: 5,
      image: "https://i.pravatar.cc/",
      firstName: "salma",
      lastName: "sa",
      dateNass: "2010-12-05",
      group: "Group3",
    },
    {
      id: 6,
      image: "https://i.pravatar.cc/",
      firstName: "hamid",
      lastName: "ha",
      dateNass: "2004-12-05",
      group: "Group2",
    },
    {
      id: 7,
      image: "https://i.pravatar.cc/",
      firstName: "smail",
      lastName: "sm",
      dateNass: "2004-12-05",
      group: "Group4",
    },
  ]);
  const [searched, setSearched] = useState({});
  const [mode, setMode] = useState(false);
  const location = useLocation();
  const Btn = () => {
    if (mode === true) {
      setMode(false);
    } else {
      setMode(true);
    }
  };

 
  return (
    <Theme.Provider value={mode}>
      <div className={mode ? "dark" : "light"} ref={App}>
        <span onClick={() => Btn()}>
          {mode ? <FiSun></FiSun> : <MdDarkMode></MdDarkMode>}
        </span>
        <Nav disable={disable} style={mode ? HeaderDark : HeaderLight}></Nav>
        <AnimatePresence mode='wait' >
          <Routes key={location.pathname} location={location}>
            <Route
              path="/"
              element={<AddStudent setStudent={SetStudent} student={student} />}
            ></Route>
            <Route
              path="/search"
              element={
                <Search
                  setSearched={setSearched}
                  setDisable={setDisable}
                  student={student}
                />
              }
            ></Route>
            <Route
              path="/update"
              element={
                <Update
                  setStudent={SetStudent}
                  searched={searched}
                  student={student}
                  setDisable={setDisable}
                />
              }
            ></Route>
            <Route path="/list" element={<List student={student} />}></Route>
          </Routes>
        </AnimatePresence>
      </div>
    </Theme.Provider>
  );
}

export default App;

const HeaderLight = {
  color: "white",
  backgroundColor: "#3F4E4F",
  width: "100%",
  margin: 0,
  paddingLeft: "15px",
  borderBottom: "2px solid black",
  display: "flex",
  transition: "0.3s ease-in-out",

  
};

const HeaderDark = {
  color: "white",
  backgroundColor: "#A27B5C",
  width: "100%",
  zIndex: 100,
  margin: 0,
  paddingLeft: "15px",
  borderBottom: "2px solid white",
  transition: "0.3s ease-in-out",
};



