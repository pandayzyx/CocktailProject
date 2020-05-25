import React from "react";
import styles from "./Input.module.css";

function Input(props) {
	let { display,type,pass,item} = props;
	return (
		<input name = {item} onChange = {pass}  type =  {type} placeholder= {display} className={styles.input}></input>
	);
}

export default Input;
