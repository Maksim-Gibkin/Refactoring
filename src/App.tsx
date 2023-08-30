import React from "react";
import UserList from "./components/UserList/UserList"
import {useFetch} from "./hooks/useFetch";
import {endpoint} from "./config/endpoint";
import {IUser} from "./models/User";

function App() {
  const {data, isLoading, error} = useFetch<IUser[]>(endpoint.user.list);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
   <div className="app">
     <UserList users={data!}/>
   </div>
  );
}

export default App;
  