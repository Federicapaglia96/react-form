import { useState } from 'react';
import blogPosts from '../public/blogPosts';

function App() {
  const [titolo, setTitle] = useState(null);
  const [Newarticolo, setArticolo] = useState("");
  const gestisciSubmit = (event) => {
    event.preventDefault();
    const arrayCopy = [...Newarticolo];
    setArticolo(arrayCopy)
  }


  return (
    <>

      <div>
        <form className="d-flex justify-content-between align-items-center mb-3 py-4" onSubmit={gestisciSubmit}>
          <input className="form-control"
            type="text"
            value={Newarticolo}
            onChange={(event) => setArticolo(event.target.value)}
            autoComplete="off"
          />
          <button className="btn btn-primary" >Aggiungi</button>
        </form>
        {blogPosts.map((curPost, index) => (
          <div
            key={curPost.id}
            titolo={curPost.titolo}
            onClick={() => setTitle(curPost.titolo)}
            style={{
              cursor: 'pointer',
              padding: '10px',
              border: '1px solid #ccc',
              margin: '5px 0',
              backgroundColor: titolo === curPost.titolo ? '#f0f8ff' : '#fff'
            }}
          >
            {curPost.titolo}
          </div>
        ))}
      </div>


    </>
  )
}

export default App
