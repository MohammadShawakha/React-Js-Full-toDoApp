import styles from "/src/listView/listView.module.css";
import Task from "/src/task/task.jsx";
import React, { useState } from "react";
import FloatingActionBtn from "/src/floatingActionBtn/floatingActionBtn.jsx";
import InputBox from "/src/inputBox/inputBox.jsx";
import { useRef } from "react";

function ListView(props) {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("111111");
  const [visbel, setVisbel] = useState(false);

  const add = (text1) => {
    setTasks([...tasks, text1]);
    setInput("");
  };

  function handeInputChange(event) {
    setInput(event.target.value);
  }

  const draged = useRef(0);
  const dragedOver = useRef(0);
  function handelSwap() {
    const tempList = [...tasks];

    const temp = tempList[draged.current];
    tempList[draged.current] = tempList[dragedOver.current];
    tempList[dragedOver.current] = temp;

    setTasks(tempList);
  }

  return (
    <>
      {visbel && (
        <InputBox
          newTaskOnClick={() => {
            add(input);
            setVisbel(false);
          }}
          cancelOnClick={() => {
            setVisbel(false);
            setInput("");
          }}
          inputProp={input}
          handeInputChangeProp={handeInputChange}
        />
      )}
      <FloatingActionBtn
        do={() => {
          setVisbel(true);
        }}
        text="+"
      />
      <h1>{props.listTitle}</h1>
      <div className={styles.listCol}>
        {tasks.map((item, i) => (
          <Task
            taskText={item}
            key={i}
            onDraged={() => (draged.current = i)}
            onDragedOver={() => (dragedOver.current = i)}
            onEnd={handelSwap}
          ></Task>
        ))}
      </div>
    </>
  );
}
export default ListView;
