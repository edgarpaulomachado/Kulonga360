import React from "react";
import { useState, useEffect} from "react";

export interface toDos {
    id: number;
    title: string;
}

export default function ToDoList (){
    const [toDos, setToDos] = useState<toDos[]>([]);
    const [toDoName, setToDoName] = useState<string>("");

    const addToDo = () => {
        const newToDo = {
            id: Math.random(),
            title: toDoName
        };

        setToDos([... toDos, newToDo]);
        setToDoName("");

    };

    const deleteToDo = (id: number) => {
        const newToDo = toDos.filter((toDO) => toDO.id !== id);
        setToDos(newToDo);
    }

    return (
        <div className="w-[450px] h-auto bg-gray-300 rounded-[10px]" >
            <h1 className="text-center text-black text-[20px] mt-[10px] ">Tarefas diárias</h1>

            <div className="flex justify-between px-[10px] mt-[30px] gap-[30px]">
                <textarea className="rounded-[10px] w-[300px] h-[40px] mt-[10px] bg-transparent outline-none outline-white p-3 resize-none overflow-auto scroll-hide" value={toDoName} onChange={(e) => setToDoName(e.target.value)}/>
                <button onClick={addToDo} className="w-auto h-auto p-[15px] rounded-[12px] border-none bg-[#66FF66] text-center text-white">Adicionar</button>
            </div>

            <div className="flex flex-col">
                {toDos.map((toDo) => {
                    return (
                        <div className="flex justify-between px-[10px] mt-[20px]">
                            <div className="text-[16px] mt-[10px]">{toDo.title}</div>
                            <button onClick={() =>{deleteToDo(toDo.id)}} className="w-auto h-auto p-[15px] rounded-[12px] border-none bg-red-500 text-center text-white">Deletar</button>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
};