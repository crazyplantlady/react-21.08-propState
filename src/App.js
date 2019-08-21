import React from 'react';
import NewsAPI from './NewsAPI'
import { useState, useEffect } from 'react';



 const App = ()=> {
  const [data, setData] = useState([]);

  useEffect(()=> {
    if(!data.length) {
    fetch("http://localhost:3001/newslet")
   .then(r=>r.json())
   .then((json)=> {
     console.log(json);

     setData(json);
      
   });
 }
})
return (
  <div>
    {
      data.map(newsInfo =>{
        
     return <NewsAPI newslet={newsInfo}/>;
      })
    }
  
  </div>
);
} 

export default App;
