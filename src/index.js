import React from 'react'
import styles from './styles.module.css'
export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
// export const Button = ({ text,onClick }) => {
//   return <button onClick={onClick}>{text}</button>
// }

// bu şekilde bütün props isimlerini tek tek yazmaya gerek kalmadan alabiliriz

// export const Button = (props) => {
//   return <button {...props}>{props.text}</button>
// }

export const Button = (props) => {
  if(props.type=="primary"){
    return <button className={styles.primary}>{props.text}</button>
 }else if(props.type=="dashed"){
    return <button className={styles.dashed}>{props.text}</button>
 }else if(props.type=="text"){
   return <button className={styles.text}>{props.text}</button>
 }else if(props.type=="link"){
   return <button className={styles.link}>{props.text}</button>
 }
 return <button className={styles.default}>{props.text}</button>
}
