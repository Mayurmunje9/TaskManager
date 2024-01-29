import React from 'react'
import { useCallback, useEffect, useState } from "react";
import { getDatabase, ref, set, get, push } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { db } from "./firebase/firebase";
import { useParams } from 'react-router-dom';


export default function UpdateTask(params) {
 

    const [listUsers, setlistUsers] = useState([]);
    const [taskDetails, settaskDetails] = useState([]);
    const [taskData, settaskData] = useState({
      title: "",
      description: "",
      assignedTo: "",
      deadline: "",
      status: "",
    });
  
    const getUsers = () => {
      get(ref(db, `users/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            setlistUsers(Object.values(data));
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    const isValidData = () => {
      console.log(taskData);
      return (
        taskData.title.trim() !== "" &&
        taskData.description.trim() !== "" &&
        taskData.assignedTo.trim() !== "" &&
        taskData.deadline.trim() !== "" &&
        taskData.status.trim() !== ""
      );
    };
    const id  = useParams();
    const getTaskDetails = () => {
        get(ref(db, `task/${id}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              const data = snapshot.val();
              settaskDetails(data);
              settaskData({
                title: data.title || "",
                description: data.description || "",
                assignedTo: data.assignedTo || "",
                deadline: data.deadline || "",
                status: data.status || "",
              });
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      };
      
    useEffect(() => {
      getUsers();
      getTaskDetails();
    }, []);
  
    const handleSubmit =async (e) => {
      const db=getDatabase()
      e.preventDefault();
      console.log("id "+ id)
      await set(ref(db,`tasks/${id}`),taskData)
      if (!isValidData()) {
        console.error("Invalid data. Please check your inputs.");
        return;
      }

   
      const dbRef = ref(db, `task/${id}`);
      set(dbRef, {
        title: `${taskData.title}`,
        description: `${taskData.description}`,
        assignedTo: `${taskData.assignedTo}`,
        deadline: `${taskData.deadline}`,
        status: `${taskData.status}`,
      })
        .then(() => {
          console.log("Task added successfully to Firebase");
        })
        .catch((error) => {
          console.error("Error writing to Firebase:", error);
        });
    };
  
    const handelChange = (e) => {
      settaskData({ ...taskData, [e.target.name]: e.target.value });
      console.log(taskData);
    };
  
    return (
      <div className='container my-4'>
        <form>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              onChange={handelChange}
              value={taskData.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
              name="description"
              onChange={handelChange}
              value={taskData.description}
            ></textarea>
          </div>
  
          <div className="d-flex">
            <div>
              <label htmlFor="status" className="form-label">
                status
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="status"
                onChange={handelChange}
                value={taskData.status}
              >
                <option>Open this select menu</option>
                <option value="todo">To Do</option>
                <option value="inProgress">inProgress</option>
                <option value="done">Done</option>
              </select>
            </div>
  
            <div>
              <label htmlFor="Assigned" className="form-label">
                Assigned User
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handelChange}
                value={taskData.assignedTo}
                name="assignedTo"
              >
                <option>Open this select menu</option>
  
                {listUsers.map((item) => {
                  return (
                    <option value={item.id.email} key={item.id}>
                      {`${item.username} <${item.email}>`}
                    </option>
                  );
                })}
              </select>
            </div>
  
            <div>
              <label htmlFor="deadline">Deadline</label>
              <input
                // style={{margin:"0px"}}
                type="date"
                name="deadline"
                id="deadline"
                className="form-control"
                onChange={handelChange}
                value={taskData.deadline}
              />
            </div>
          </div>
          <div className="createTask">
            <Link
              className="rounded btn btn-dark"
              to="/CreateTask"
              onMouseOver={handelChange}
              type="submit"
              onClick={handleSubmit}
            >
              Add Task
            </Link>
          </div>
        </form>
      </div>
    );
  
}
