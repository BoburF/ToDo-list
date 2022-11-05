import { useState, useEffect } from 'react';
import "./List.css"

const List = (props: {
  text: string,
  completed: boolean,
  id: number,
  onClickHandler: any
}) => {
  
  const [active, setActive] = useState(["check_box"])

  useEffect(()=>{
    const isActive = () => {
    if(props.completed){
      setActive(a => {
        return [...a, "active"]
      })
    }else{
      setActive(["check_box"])
    }
  }
    isActive()
  }, [props.completed])

  return (
    <div className="List">
        <div className="check">
          <input type="checkbox" className={active.join(" ")} onClick={(e)=>{
              props.onClickHandler()
          }}/>
        </div>
        <div className="text">
          <p className="normal checked">{props.text}</p>
        </div>
    </div>
  )
}

export default List