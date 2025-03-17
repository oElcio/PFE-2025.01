"use client"

import { useState } from "react";
import styles from "./page.module.css";
import { Dado } from "../componentes/dado";

export default function Home() {

  function numero_aleatorio(){
    setCount(Math.floor(Math.random() * 6) + 1);
  }
  
  const [count, setCount] = useState(0);

  return (
    <div>

      <button onClick={ numero_aleatorio } className={styles.button}>
          Clique aqui!! 
        </button>

        <Dado valor={ count } className={styles.dado}/>
      
    </div>
  );
}
