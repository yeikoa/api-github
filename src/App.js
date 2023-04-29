import { useState } from "react";

function App() {
  const [search, setSearch]=useState('');

  const[user, setUser] = useState(null);

  const fetchUser = async () =>{
    try {
      const response = await fetch(`https://api.github.com/users/${search}`)
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log("Error: ", error.message);      
    }
  }
  return (
    <div className="container">
      <h1>Buscador de usuarios</h1>
      <div className="grid">
          <input onChange={(e) => setSearch(e.target.value)}
           placeholder="Ingresa el nombre de usuario"></input>
        
          <button onClick={fetchUser}>Buscar</button>
      </div>
      <article>
        {user &&(
          <div className="container">
          <img src={user.avatar_url} alt="Usuario"></img>
          <h4>{user.login}</h4>
          <p>{user.bio}</p>
        </div>
        )}
        
      </article>
    </div>
  );
}

export default App;
