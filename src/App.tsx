import React, {useState, useEffect} from "react";
import UserService from "./config/UserService";
import {IUser} from './models/User'

function App() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);

        UserService.getAll()
            .then((data: IUser[]) => {
                setLoading(false);
                setUsers(data)
                return data
            })
            .catch((error: Error) => {
                setLoading(false);
                setError(error.toString());
                return error
            })
    }, []);

    return (
        <div className="app">
            {isLoading && <>Loading...</>}
            {error && <>Error: {error}</>}
            {!isLoading && !error
                && <>
                    <h1>Users</h1>
                    {users?.map((user) => (
                        <div key={user?.id}>
                            <h2>{user?.name}</h2>
                            <p>{user?.email}</p>
                        </div>
                    ))}
                </>
            }
        </div>
    );
}

export default App;
  