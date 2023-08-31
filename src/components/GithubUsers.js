import { useEffect, useState, useRef } from "react";
import Button from "./Button";

const GithubUsers = () => {
  const [user, setUser] = useState([]);
  const [inputUser, setInputUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(null);
  const GITHUB_URL = "https://api.github.com";

  const ref = useRef();

  useEffect(() => {

    if(inputUser){
    setIsLoading(true);
    const getUser = setTimeout (async () => {
    try {
      const response = await fetch(`${GITHUB_URL}/search/users?q=${inputUser}`);

      if (!response.ok) throw Error("Something went wrong!");
      else {
        const userData = await response.json();
        setUser(inputUser.length !== 0 ? userData.items : []);
        setShowError(null);
      }
    } catch (err) {
      setShowError(`Error: ${err.message}`);
    } finally{
      setIsLoading(false);
    }
  }, 1000);
  return () => clearTimeout(getUser);
}
else{
  setUser([]);
  setIsLoading(false);
}

   
  }, [inputUser]);

  const handleSubmit = (e) => {
    e.preventDefault()
    ref.current.focus();    
  };

  return (
    <div className="githubSearch">
      <h1 className="heading">Search Github User</h1>
      <form onSubmit={handleSubmit}>
        <div className="input text-center">
          <input
            type="text"
            focus='true'
            ref={ref}
            className="inp"
            placeholder="Search user...."
            value={inputUser}
            onChange={(e) => setInputUser(e.target.value)}
          />

          <Button title={"Search Github User"}/>
        </div>
      </form>

      <div className="totalusers text-center m-2">
        <h4>
          Total
          {user.length > 1 ? " Users: " : " User: "}
        <span className="text-warning"> {user.length}</span> 
        </h4>
      </div>

      <ul>
        {isLoading && <p>Loading...</p> }
        {showError && <p>{showError}</p>}
        {!showError && !isLoading && 
          (user.length ? (
            user.map((users) => (
              <li key={users.id}>
                <img src={users.avatar_url} alt={user.login} />
                <a href={users.html_url} target="_blank" rel="noreferrer">
                  {users.login}
                </a>
              </li>
            ))
          ) : user.length ? (
            <p className="error">404, User not found!</p>
          ) : (
            <p>Search Github user to enter username in above input box.</p>
          ))}
      </ul>
    </div>
  );
};

export default GithubUsers;
