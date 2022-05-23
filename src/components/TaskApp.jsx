import React from "react";
import TaskHeader from "../components/TaskHeader/TaskHeader"
import AddTask from "../components/AddTask/AddTask"
import Task from "../components/Task/Task"

import styles from "./taskApp.module.css";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader />
      {/* Add Task */}
      <AddTask />
      {/* Tasks */}
      <Task />
    </div>
  );
};

export default TaskApp;
