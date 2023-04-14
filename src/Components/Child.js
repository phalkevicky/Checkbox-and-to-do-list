import React, { useEffect } from 'react'

const Child = ({data,setgetdata}) => {

    //console.log("Child",data);
    useEffect(()=>{

        setgetdata("byyeeee")
    },[data])

    const postAPI = ()=>{

        console.log("hiii");
        let url = "http://3.109.244.50:80/ptad-v2/api/v2/event/user/enquiry"
        let PostData = 
            {
                enquiryEmail:"vishwa@rnt.ai"
            }
        

        let requestData ={
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(PostData),
        }

        fetch(url,requestData)
        .then((res)=> res.json())
        .then((result)=>{

            return(

                console.log("Postdatares",result)
            )
        })
    }

  return (
    <div>Child
        <button onClick={postAPI}>Click</button>
    </div>
  )
}

export default Child