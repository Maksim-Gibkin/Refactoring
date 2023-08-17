import React from "react";
import UserList from "./components/UserList/UserList"
import {useFetchUsers} from "./hooks/useFetchUsers";
import {endpoint} from "./config/endpoint";

function App() {
  const {users, isLoading, error} = useFetchUsers(endpoint.user.list);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
   <div className="app">
     <UserList users={users}/>
   </div>
  );
}

export default App;
  