import React, { useRef, useState } from 'react'

const Todo = () => {

    const [text,settext] = useState();
    const [list,setlist] = useState([]);
    const cleartext = useRef();


    const getText = (e)=>{
        let value = e.target.value;
        settext(value);
    }

    const addToList = ()=>{
        setlist([...list,text]);
        cleartext.current.value = '';
    }

    const deleteList = (i)=>{
        let todolist = [...list]
        todolist.splice(i,1);
        setlist(todolist);
    }

    const editList = (i)=>{

        let todolist = [...list]
        todolist.splice(i,1);
        setlist(todolist);
    }

    const [radio, setradio] = useState("")

    const changed = (e)=>{

        let value = e.target.value;
        setradio(value);

    }

    const [checkboxdata, setcheckboxdata] = useState([])

//    console.log("radio",radio);

    const checkbox = (e)=>{
        const { value, checked } = e.target;
        
        console.log(`${value} is ${checked}`);
        if (checked) {
            setcheckboxdata([...checkboxdata,value])
          }else{

            setcheckboxdata(checkboxdata.filter((e) => e !== value))
          }
    }

    const checkboxall = ()=>{

      console.log("hii");
    }

    console.log("checkboxdata",checkboxdata);

  return (
    <div>
        <h2>Todo list</h2>

        <input type="text" ref={cleartext} onChange={getText}/>
        <button onClick={addToList}>Add to list</button>
        <ul>
            {
                list.map((item,i)=>{
                    return(
                        <li key={i}>
                            {item}
                            <button onClick={editList}>edit</button>
                            <button onClick={()=>deleteList(i)}>delete</button>
                        </li>
                    )
                })
            }
        </ul>

        <input onChange={changed} value="apple" type="radio" checked={radio ==="apple"}/>
        <label >Apple</label>

        <input onChange={changed} value="Banana" type="radio" checked={radio ==="Banana"}/>
        <label >Banana</label>

        <input onChange={changed} value="Mango" type="radio" checked={radio ==="Mango"}/>
        <label >Mango</label>



    </div>
  )
}

export default Todo