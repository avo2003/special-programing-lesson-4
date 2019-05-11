import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); /*tarnale esksav */

  useEffect(() => {
    const fetchUsers = async () => {
      try{
      const response = await fetch(
        "https://randomuser.me/api/?results=10&nat=us"
      );
      const users = await response.json();
      setData(users.results);
      setIsLoading(false); /* tarnale verchantsav  */
    }catch(error){
      console.log(error);
      
    }
    };
    fetchUsers();
  }, []);

  const renderUser = () => {
    if (isLoading) return <div><img src='https://cdn.dribbble.com/users/80078/screenshots/995621/loading.gif'></img></div>

    
    
    ;

    return (
      <div>
        <div>
          {data.map(user => (
            <div key={user.login.uuid}>
              <img src={user.picture.large} alt="avatar"/>
              <h2>first Name: {user.name.first}</h2>
              <h2>last Name: {user.name.last}</h2>
              <h3>gender: {user.gender}</h3>
              <h3>Email: {user.email}</h3> <br />
            </div>
          ))}
        </div>
      </div>
    );
  };
  return <div>{renderUser()}</div>;
}

