import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Task from "./Task";
import { db } from "./firebase/firebase";
import { onValue, ref } from "firebase/database";

export default function Home() {
  let authToken = localStorage.getItem("authToken");
  const [taskList, setTaskList] = useState({
    todo: {},
    inProgress: {},
    done: {},
  });

  const getTaskList = () => {
    onValue(ref(db, "task/"), (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const filterData = {
          todo: {},
          inProgress: {},
          done: {},
        };

        Object.keys(data).forEach((key) => {
          const item = data[key];
          filterData[item.status][key] = item;
        });

        setTaskList(filterData);
        console.log(filterData);
      } else {
        console.log("No data available");
      }
    });
  };

  useEffect(() => {
    getTaskList();
  }, []);

  useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  return (
    <div className="container d-flex justify-content-between">
      {/* TO DO Column */}
      <div className="w-25 my-3">
        <div className="bg-primary p-3 my-1 mx-4 rounded">To Do</div>
        {!authToken ? (
          <div className="container my-5">
            <h2 style={{ width: "27rem" }}>Please Login to View Tasks</h2>
          </div>
        ) : (
          Object.entries(taskList.todo).map(([taskId, task]) => (
            <Task
              key={taskId}
              taskId={taskId}
              title={task.title}
              description={task.description}
            />
          ))
        )}
      </div>

      {/* IN Progress Column */}
      <div className="w-25 my-3">
        <div className="bg-warning p-3 my-2 mx-4 rounded flex">In Progress</div>
        {!authToken
          ? null
          : Object.entries(taskList.inProgress).map(([taskId, task]) => (
              <Task
                key={taskId}
                taskId={taskId}
                title={task.title}
                description={task.description}
              />
            ))}
      </div>

      {/* Done Column */}
      <div className="w-25 my-3">
        <div className="bg-success p-3 my-2 mx-4 rounded">Done</div>
        {!authToken
          ? null
          : Object.entries(taskList.done).map(([taskId, task]) => (
              <Task
                key={taskId}
                taskId={taskId}
                title={task.title}
                description={task.description}
              />
            ))}
      </div>

      <div className="my-3 mx-4">
        <Link className="rounded btn btn-dark" to={authToken?`/CreateTask`:`/`}>
          Add Task
        </Link>
      </div>
    </div>
  );
}
