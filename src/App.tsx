import { useEffect, useState } from 'react';
import './App.css';
import Input from './components/Input/Input';
import List from './components/List/List';
import ListInterface from "./interfaces/list"

function App() {

  const [list, setList] = useState([])

  const setListHandler = ()=>{
    setList((JSON.parse(localStorage.getItem("list") || "[]")))
  }

  const onChangeLocalstorage = {
    setLocal: (list: ListInterface[],input: string)=>{
      localStorage.setItem("list", JSON.stringify([...list, {
        text: input,
        comleted: false,
        id: list ? list.length + 1 : 0
      }]))
      setListHandler()
    }
  }

  

  useEffect(()=>{
    setListHandler()
  }, [])

  return (
    <div className="App">
      <div className="center">
      <Input onSubmitHandler={onChangeLocalstorage}/>
      <div className="list">
        <ul>
          {
            list?.map((item: ListInterface,idx: number)=>(
              <li key={idx}><List text={item.text} completed={item.completed}/></li>
            ))
          }
        </ul>
      </div>
      </div>
    </div>
  );
}

export default App;
