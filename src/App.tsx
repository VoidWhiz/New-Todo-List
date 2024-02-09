import { useState } from "react";
import "./app.scss";

function App() {
  const [input, SetInput] = useState("");

  const [tasks, setTasks] =  useState<string[]
  >([]);

  const [editTask, setEditTask] = useState({
    enabled: false,
    tasks: ""
  })

  function handleDelete(nome: string){

    const newList = tasks.filter((filtro) => filtro !== nome)
    setTasks(newList)
    
  }

  function handleEdit(nome: string){
    SetInput(nome)
    setEditTask({
      enabled: true,
      tasks: nome
    })
  }

  function handleAdd(){

    if(!input){
      alert("Insira sua tarefa")
      return
    }

    if(tasks.includes(input)){
      alert("Tarefa ja existente")
      return
    }

    if(editTask.enabled){
      handleSaveEdit();
      return
    }

    function handleSaveEdit(){
      const findIndexTask = tasks.findIndex(task => task === editTask.tasks)

      const alltasks = [...tasks];

      alltasks[findIndexTask] = input;
      setTasks(alltasks)

      setEditTask({
        enabled: false,
        tasks: ""
      })
    }

    SetInput("");

    setTasks(tarefas => [...tarefas, input]);

  }



  return (
    <>
      <div className="conteiner">
        <div className="TodoName"><h2>To-do list.</h2></div>
      <div className="consult">
        <input
          type="text"
          value={input}
          onChange={(e) => SetInput(e.target.value)}
        />
        <button onClick={handleAdd}>{editTask.enabled ? "EDIT" : 'ADD'}</button>
      </div>
      <div className="resultados">
        {tasks.map( (item) => (
          <ul key={item}>
            <li>{item}</li>
            <button onClick={() => handleEdit(item)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 256 256"><path d="M225.91,74.79,181.22,30.1a14,14,0,0,0-19.8,0L38.1,153.41a13.94,13.94,0,0,0-4.1,9.9V208a14,14,0,0,0,14,14H92.69a13.94,13.94,0,0,0,9.9-4.1l86.16-86.16,4.61,18.42-37.6,37.6a6,6,0,1,0,8.49,8.48l40-40a6,6,0,0,0,1.58-5.7l-7.18-28.7,27.26-27.25A14,14,0,0,0,225.91,74.79ZM46,208V174.49L81.52,210H48A2,2,0,0,1,46,208Zm50-.49L48.48,160,136,72.49,183.52,120ZM217.42,86.1,192,111.52,144.49,64,169.9,38.59a2,2,0,0,1,2.83,0l44.69,44.68A2,2,0,0,1,217.42,86.1Z"></path></svg></button>
            <button onClick={() => handleDelete(item)} className="handleDelete"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" viewBox="0 0 256 256"><path d="M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z"></path></svg></button>
          </ul>
        ))}
      </div>
      </div>
    </>
  );
}

export default App;
