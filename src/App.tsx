import React, { useState, useEffect } from 'react';
import UserCard from './components/UserCard';
import LoadingSpinner from './components/LoadingSpinner';
import { User } from './types/User';
import './App.css';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      
      const userData = await response.json();
      setUsers(userData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center">
          <h4>Error Loading Users</h4>
          <p>{error}</p>
          <button className="btn btn-primary" onClick={fetchUsers}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 text-primary mb-3">User Profiles</h1>
          <p className="lead text-muted">Assignment 1 - Basic React Implementation</p>
        </div>
        
        <div className="row">
          {users.map((user) => (
            <div key={user.id} className="col-md-6 col-lg-4 mb-4">
              <UserCard user={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;