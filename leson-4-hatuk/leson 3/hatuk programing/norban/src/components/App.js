import React, { useState, useEffect } from 'react';


export default function App() {
    const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(data => setData(data))
    //         .catch(err => console.log(err));
    // }, []);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await response.json();
            setData(users);

        };
        fetchUsers();



    }, [    ]);


    return (
        <div>

            <h1>hello tumo</h1>
            <div>
                {data.map(user => (
                    <div key={user.id}>
                        <h2>Name: {user.name}</h2>
                        <h3>Email: {user.email}</h3>


                    </div>

                ))}
            </div>
        </div>
    );
}
