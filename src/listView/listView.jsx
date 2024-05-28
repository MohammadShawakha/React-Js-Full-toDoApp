import styles from "/src/listView/listView.module.css";
import Task from "/src/task/task.jsx";
import React, { useState } from "react";
import FloatingActionBtn from "/src/floatingActionBtn/floatingActionBtn.jsx";

function ListView(props) {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("111111");
  const [visbel, setVisbel] = useState(false);

  const add = (text1) => {
    setTasks([...tasks, load(text1)]);
    setInput("");
  };

  function handeInputChange(event) {
    setInput(event.target.value);
  }

  return (
    <>
      {visbel && (
        <div>
          <input type="text" value={input} onChange={handeInputChange} />

          <button
            onClick={() => {
              add(input);
            }}
          >
            New Task
          </button>
          <button
            onClick={() => {
              setVisbel(false);
            }}
          >
            cansle
          </button>
        </div>
      )}
      <FloatingActionBtn
        do={() => {
          setVisbel(true);
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
