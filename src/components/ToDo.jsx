import React from 'react'
import { useState } from 'react'
import { AddBoxRounded, BorderColorRounded, DeleteRounded } from '@mui/icons-material'

const ToDo = () => {
    const [list, setList] = useState([])
    const [task, setTask] = useState("")
    const [editId, setEditId] = useState()
    const [editButton, setEditButton] = useState(false)



    const addToList = () => {
        if (task !== '') {
            setList([...list, task])
            setTask('')
        }
    }

    const ID = (id) => {
        setEditId(id)
        setEditButton(true)
        setTask(list[id])
    }


    const editTask = () => {
        const updatedList = [...list]
        updatedList[editId] = task
        if (task !== "") {
            setList(updatedList)
            setTask("")
            setEditButton(false)
        }
    }

    const deleteTask = (id) => {
        const updatedList = [...list]
        updatedList.splice(id, 1)
        setList(updatedList)  
    }
 
    return (
        <>
            <div className="box">
                <h1>ToDo list</h1>

                <div className="input">
                    <input
                        type="text"
                        placeholder='enter the  task'
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    {editButton && list.length ?
                        (
                            <div className='list_operator'>
                                <BorderColorRounded sx={{ fontSize: "33px", color: "blue", marginX: "10px" }} className='icons' onClick={() => editTask()} />
                                <AddBoxRounded sx={{ fontSize: "38px", color: "lightgreen" }} className='icons' onClick={addToList} />
                            </div>
                        ) :
                        (
                            <AddBoxRounded sx={{ fontSize: "40px", color: "lightgreen" }} className='icons' onClick={addToList} />
                        )
                    }

                </div>

                <div className="list_container">
                    {list.map((item, id) => {
                        return (
                            <div className="list_item" key={id}>

                                <div className='item'>
                                    <input type="checkbox" value={item} name={item}  />
                                    <label htmlFor={item} className='taskName'>{item}</label>
                                </div>

                                <div className="list_operator">
                                    <BorderColorRounded sx={{ fontSize: "25px", color: "blue" }} className='icons' onClick={() => ID(id)} />
                                    <DeleteRounded sx={{ fontSize: "28px", color: "red" }} className='icons' onClick={() => deleteTask(id)} />
                                </div>

                            </div>
                        )
                    })}
                </div>


            </div>

        </>
    )
}

export default ToDo