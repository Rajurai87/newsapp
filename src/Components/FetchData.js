import React, {useEffect, useState} from 'react';
import axios from "axios";


const FetchData = ({cat}) => {
  const [data, setData] = useState([]);
  const [laoding, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get(
          cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=9e23d730c1a544b88b117a93ad177195`
            :"https://newsapi.org/v2/top-headlines?country=in&apiKey=9e23d730c1a544b88b117a93ad177195")
            .then((res) => {
              setLoading(false);
              setData(res.data.articles);
            }).catch(err => 
            {
              alert("Something went wrong!!");
            })
    }, [cat]);
    
  return (
    <div className="container my-4">
      <h3><u>TOP HEADLINES</u></h3>
      <div className='container d-flex justify-content-center align-items-center flex-column my-2' style={{minHeight: "100vh"}}>
        {!laoding ? data.map((items, index)=>
      <div key={index} className='container my-4 p-4' style={{width: "600px", boxShadow: "2px 2px 10px silver", borderRadius: "10px"}}>
      <h5>{items.title}</h5>
      <div className='d-flex justify-content-center align-items-center'>
      <img src={items.urlToImage} alt="/" className='img-fluid' 
      style={{width: "100%", height: "300px", objectFit: "cover"}}/>
      </div>
      <p>{items.content}</p>
      <a href={items.url} target="blank">View more</a>
      
      </div>
      ) : "loading..."}</div>
    </div>
  )
}

export default FetchData
