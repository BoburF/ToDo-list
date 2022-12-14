import { useState } from "react";
import ListInterface from "../../interfaces/list"
import "./Input.css";

const Input = (props: {onSubmitHandler: any}) => {
    const [input, setInput] = useState("")
    const [active, setButton] = useState([""])

    const setLocalOnSubmit = (e: any)=>{
        e.preventDefault()
        let list: ListInterface[] = (JSON.parse(localStorage.getItem("list") || "[]"))
        if(input.length){
          props.onSubmitHandler.setLocal(list, input)
        }
        setInput("")
        setButton([""])
    }
    
    return (
    <div className="Input">
      <form className={["add_list", ...active].join(" ")} onSubmit={(e)=>setLocalOnSubmit(e)}>
        <input type="text" placeholder="What needs to be done?" value={input} onChange={(e)=>
        {
            setInput(e.target.value)
            if(e.target.value.length >= 1){
                setButton([...active, "active"])
            }else if(e.target.value.length < 1){
                setButton([])
            }
        }
            }/>
        <button className={active.join(" ")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-box-arrow-down"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1h-2z"
            />
            <path
              fillRule="evenodd"
              d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Input;
