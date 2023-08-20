import { useEffect, useState, useRef } from "react";
import Button from "./Button";

const GithubUsers = () => {
  const [user, setUser] = useState([]);
  const [inputUser, setInputUser] = useState("");
  const [storeInfo, setStoreInfo] = useState("");
  const [showError, setShowError] = useState(null);
  const GITHUB_URL = "https://api.github.com";

  const ref = useRef();

  useEffect(() => {
    storeInfo.length && getUser(storeInfo);
  }, [storeInfo]);

  const handleSubmit = () => {
    setStoreInfo(inputUser);
    ref.current.focus();    
  };

  const getUser = async (query) => {
    try {
      const response = await fetch(`${GITHUB_URL}/search/users?q=${query}`);
      if (!response.ok) throw Error("Something went wrong!");
      else {
        const userData = await response.json();
        setUser(query.length !== 0 ? userData.items : []);
        setShowError(null);
      }
    } catch (err) {
      setShowError(`Error: ${err.message}`);
    }
  };

  return (
    <div className="githubSearch">
      <h1 className="heading">Search Github User</h1>
      <form onSubmit={(e) => e.preventDefault()}>
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

          <Button title={"Search Github User"} handleSubmit={handleSubmit} />
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
        {showError && <p>{showError}</p>}
        {!showError &&
          (user.length ? (
            user.map((users) => (
              <li key={users.id}>
                <img src={users.avatar_url} alt={user.login} />
                <a href={users.html_url} target="_blank" rel="noreferrer">
                  {users.login}
                </a>
              </li>
            ))
          ) : storeInfo.length ? (
            <p className="error">404, User not found!</p>
          ) : (
            <p>Search Github user to enter username in above input box.</p>
          ))}
      </ul>
    </div>
  );
};

export default GithubUsers;
