import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Child from './Child';

export const Home = () => {

    const navigate = useNavigate();
    const [first, setfirst] = useState([])
    const [text, settext] = useState()
    const [ind, setind] = useState()

    const gettext = (e) => {

        console.log(e.target.value);
        settext(e.target.value)
    }

    const entertext = (e) => {

        if (e.key === "Enter") {
            //settext(e.target.value)
            setfirst([...first, text]);
            settext("")

        } else {
            console.log("error");
        }
    }

    const addlist = () => {

        setfirst([...first, text]);
        settext("")
    };

    const deletelist = (i) => {
        const newTodos = [...first];
        newTodos.splice(i, 1);
        setfirst(newTodos);
    }

    const editlist = (i) => {

        console.log("edit",first[i]);
        settext(first[i])

    }

    const addeditlist = ()=>{
        console.log("ind",ind);
        const newTodos = [...first];
        newTodos.splice(ind, 1,text);
        setfirst(newTodos);
    }



    console.log("fist", first);

    return (
        <div>Home

            <input type="text" value={text} onKeyDown={entertext} onChange={(e) => gettext(e)} />
            <button onClick={addlist}>Add</button>
            <button onClick={addeditlist}>edit</button>

            <h2>TO-DO List</h2>
            <ul>
                {
                    first.map((item, i) => {

                        return (

                            <li key={i}>{item}
                                <button style={{margin:10}} onClick={
                                    () => {
                                        editlist(i);
                                        setind(i)
                                    }
                                
                                }>Edit</button>
                                <button onClick={() => deletelist(i)}>delete</button>
                            </li>

                        )
                    })
                }
            </ul>

                <Link to="/todo">Nav to To Do</Link>
        </div>
    )
}
