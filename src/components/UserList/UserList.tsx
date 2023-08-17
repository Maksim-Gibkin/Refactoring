import React from "react";
import {IUser} from "../../models/User";

interface IUserProps {
  users: IUser[]
}

const UserList = ({users}: IUserProps) =>  (
   <>
     <h1>Users</h1>
     {users?.map((user: IUser) => (
      <div key={user?.id}>
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </div>
     ))}
   </>
  )

export default UserList;
