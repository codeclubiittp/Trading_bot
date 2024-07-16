import { useState, useEffect } from 'react';
import '../styles/Home.css';

// components
import UserCard from '../components/UserCard';

const Home = ({ account }) => {
    // Initialize state variables
    const [fetchError, setFetchError] = useState(null);
    const [users, setUsers] = useState(null);

    // Fetch data from the API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:8000/user/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json().then((data) => data.data);
                setUsers(data);
            } catch (error) {
                setFetchError(error.message);
            }            
        };
        fetchUsers();
    }, []);

    return (
        <div className="home-container">
            <h1>Trade Bot Users</h1>
            {fetchError && <p>{fetchError}</p>}
            {users && (
                <div className="users">
                    <div className="user-grid">
                        {users.map((user, key) => (
                            <UserCard key={key} idx={key} user={user} account={account} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;