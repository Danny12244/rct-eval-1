import React from "react";
import styles from "./counter.module.css";

const Counter = (props) => {
  console.log(props)
  // sample value to be replaced
 const [count , setcount] = React.useState(0)

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" className={styles.blue} onClick={()=>setcount(count +1)}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" className={styles.blue} onClick={()=>setcount(count -1)} disabled={count==1 || count==0}>-</button>
     
    </div>
  );
};

export default Counter;
