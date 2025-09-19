import React from 'react';
import { User } from '../types/User';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;
  
  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="card-body text-center">
        <div className="mb-3">
          <img
            src={avatarUrl}
            alt={`${user.name}'s avatar`}
            className="rounded-circle border"
            style={{ width: '80px', height: '80px' }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/80x80/007bff/ffffff?text=User';
            }}
          />
        </div>
        
        <h5 className="card-title text-primary">{user.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">@{user.username}</h6>
        
        <div className="text-start mt-3">
          <div className="mb-2">
            <i className="fas fa-envelope text-primary me-2"></i>
            <small className="text-muted">{user.email}</small>
          </div>
          
          <div className="mb-2">
            <i className="fas fa-phone text-primary me-2"></i>
            <small className="text-muted">{user.phone}</small>
          </div>
          
          <div className="mb-2">
            <i className="fas fa-globe text-primary me-2"></i>
            <small className="text-muted">
              <a 
                href={`http://${user.website}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {user.website}
              </a>
            </small>
          </div>
          
          <div className="mb-2">
            <i className="fas fa-map-marker-alt text-primary me-2"></i>
            <small className="text-muted">
              {user.address.street}, {user.address.suite}<br />
              {user.address.city}, {user.address.zipcode}
            </small>
          </div>
          
          <div className="mb-2">
            <i className="fas fa-building text-primary me-2"></i>
            <small className="text-muted">{user.company.name}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;