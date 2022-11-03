import { useState, useEffect } from 'react';
import "./List.css"

const List = (props: {text: string, completed: boolean}) => {
  const [active, setActive] = useState(["check_box"])

  useEffect(()=>{
    const isActive = () => {
    if(props.completed){
      setActive(a => {
        return [...a, "active"]
      })
    }}
    isActive()
  }, [props.completed])
  
  return (
    <div className="List">
        <div className="check">
          <input type="checkbox" className={active.join(" ")}/>
        </div>
        <div className="text">
          <p className="normal checked">{props.text}</p>
        </div>
    </div>
  )
}

export default List