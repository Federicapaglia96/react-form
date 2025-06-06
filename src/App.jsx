import { useState } from 'react';
import blogPosts from '../public/blogPosts';


function App() {
  const [titolo, setTitle] = useState(null);
  
  return (

    <div>
      {blogPosts.map((curPost, index)=>(
        <div
        key={curPost.id}
       titolo = {curPost.titolo}
       onClick={()=> setTitle(curPost.titolo)}
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          margin: '5px 0',
        }}
        >
          {curPost.titolo}
        </div>
      
       
    
      ))}
    </div>
  )  
}


export default App
