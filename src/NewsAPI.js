import React from 'react';

const NewsAPI = (props) => {
  
    return (
        <div className="card">
            
           <img src={props.newslet.photo}/>     
            <div>{props.newslet.title}</div>
            <div>{props.newslet.text}</div>
                       
        </div>
    )
}
export default NewsAPI;