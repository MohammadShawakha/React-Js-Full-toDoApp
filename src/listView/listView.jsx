import styles from "/src/listView/listView.module.css";
import Task from "/src/task/task.jsx";
import React, { useState } from "react";
import FloatingActionBtn from "/src/floatingActionBtn/floatingActionBtn.jsx";

function ListView(props) {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("111111");

  const add = (text1) => {
    setTasks([...tasks, load(text1)]);
  };

  function handeInputChange(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <input type="text" value={input} onChange={handeInputChange} />
      <FloatingActionBtn
        do={() => {
          add(input);
        }}
        text="+"
      />
      <h1>{props.listTitle}</h1>
      <div className={styles.listCol}>{tasks}</div>
    </>
  );
}
export default ListView;

function load(taskText) {
  return <Task taskText={taskText}></Task>;
}
