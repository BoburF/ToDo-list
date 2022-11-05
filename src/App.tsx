import { useEffect, useState } from 'react';
import './App.css';
import Input from './components/Input/Input';
import List from './components/List/List';
import ListInterface from "./interfaces/list";

function App() {

  const [list, setList] = useState([])

  const parseLocalStorage = ()=>{
    return JSON.parse(localStorage.getItem("list") || "[]")
  }

  const resetLocalStorage = (list: ListInterface[])=>{
    localStorage.setItem("list", JSON.stringify(list))
  }

  const setListHandler = ()=>{
    setList(()=>parseLocalStorage())
  }

  const onChangeLocalstorage = {
    setLocal: (list: ListInterface[],input: string)=>{
      localStorage.setItem("list", JSON.stringify([...list, {
        text: input,
        completed: false,
        id: list ? list.length + 1 : 0
      }]))
      setListHandler()
    }
  }

  const findOneInLocalStorage = (id: number)=>{
    const list = parseLocalStorage()
    list.forEach((item: ListInterface, idx: number)=>{
      if(item.id === id){
        if(item.completed === true){
          item.completed = false;
        }else if(item.completed === false){
          item.completed = true;
        }
        list[idx] = item;
      }
    })
    resetLocalStorage(list)
    setListHandler()
  }

  const clearAll = () => {
    localStorage.removeItem("list")
    resetLocalStorage([])
    setListHandler()
  }

  const clearAllCompleted = (list: ListInterface[]) => {
    const lengthList = list.length
    const newList = []
    for (let i = 0; i < lengthList; i++) {
        if(list[i].completed !== true){
          list[i].id = i
          newList.push(list[i])
        }
    }
    resetLocalStorage(newList)
    setListHandler()
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
              <li key={idx}><List text={item.text} completed={item.completed} id={item.id} onClickHandler={()=>findOneInLocalStorage(item.id)}/></li>
            ))
          }
        </ul>
      </div>
      <div className="functions">
        <div className="clear function">
          <button onClick={()=>clearAllCompleted(parseLocalStorage())}>clear all completed</button>
        </div>
        <div className="select_all function">
          <button onClick={()=>clearAll()}>clear all</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
