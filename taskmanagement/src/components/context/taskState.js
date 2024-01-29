import taskContext from "./taskContext";
import React from 'react'

export default function taskState() {
    
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

  )
}
