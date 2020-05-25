import React from "react"
import styles from "./Button.module.css"


function Button(props){
  let {first,second,third} =  props
    return(
      <>
    <button  onClick = {first}className = {styles.button}>Start</button>
    <button  onClick = {second}className = {styles.button}>Pause</button>
    <button  onClick = {third}className = {styles.button}>Reset</button>
    </>
    )
}

export default Button