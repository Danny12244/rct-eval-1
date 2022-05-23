import React from "react";
import styles from "./addTask.module.css";
import Counter from '../Counter/Counter'



const AddTask = () => {
  const [todo ,setTodo] = React.useState([]);
  const [newtodo ,setnewTodo] = React.useState('');

  const Delete=(id)=> {
     console.log(id)
    let chng = todo.filter(todo=> todo.id !== id);
    setTodo(chng)
   }

  
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" className={styles.inp} placeholder="Add task..." type="text" 
      value={newtodo}
      onChange={ (e)=>{setnewTodo(e.target.value)}}/>
      <button data-cy="add-task-button"
      onClick={()=>{setTodo([...todo,{id:Date.now(),value:newtodo}])
      setnewTodo("") } } >+</button>

      <div>
        {todo.map((el) =>(
        <div className={styles.show} key={el.id}>{el.value}
        <div className={styles.one}>
        <Counter  />
        <div className={styles.sho} onClick={(e)=>Delete(el.id)}>X</div>
        </div>
        </div>
       
        )
        )}
      </div>
    </div>
  );
};

export default AddTask;
