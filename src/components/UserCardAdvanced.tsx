import React from 'react';
import { Card, Typography, Space, Popconfirm } from 'antd';
import { 
  HeartOutlined, 
  HeartFilled, 
  EditOutlined, 
  DeleteOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  EnvironmentOutlined,
  BankOutlined
} from '@ant-design/icons';
import { User } from '../types/User';

const { Text, Paragraph } = Typography;

interface UserCardAdvancedProps {
  user: User;
  isLiked: boolean;
  onEdit: (user: User) => void;
  onDelete: (userId: number) => void;
  onToggleLike: (userId: number) => void;
}

const UserCardAdvanced: React.FC<UserCardAdvancedProps> = ({
  user,
  isLiked,
  onEdit,
  onDelete,
  onToggleLike
}) => {
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://via.placeholder.com/80x80/1890ff/ffffff?text=User';
  };

  return (
    <Card
      hoverable
      style={{ height: '100%', borderRadius: '12px' }}
      bodyStyle={{ padding: '24px', textAlign: 'center' }}
    >
      <div style={{ marginBottom: '16px' }}>
        <img
          src={avatarUrl}
          alt={`${user.name}'s avatar`}
          className="user-avatar"
          onError={handleImageError}
        />
      </div>

      <Typography.Title level={4} style={{ marginBottom: '4px', color: '#1890ff' }}>
        {user.name}
      </Typography.Title>
      
      <Text type="secondary" style={{ fontSize: '14px', display: 'block', marginBottom: '16px' }}>
        @{user.username}
      </Text>

      <div style={{ textAlign: 'left', marginBottom: '16px' }}>
        <div className="user-info-item">
          <MailOutlined />
          <Text ellipsis style={{ fontSize: '12px' }}>
            {user.email}
          </Text>
        </div>
        
        <div className="user-info-item">
          <PhoneOutlined />
          <Text style={{ fontSize: '12px' }}>
            {user.phone}
          </Text>
        </div>
        
        <div className="user-info-item">
          <GlobalOutlined />
          <Text 
            style={{ fontSize: '12px' }}
            ellipsis
          >
            <a 
              href={`http://${user.website}`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#1890ff' }}
            >
              {user.website}
            </a>
          </Text>
        </div>
        
        <div className="user-info-item">
          <EnvironmentOutlined />
          <Text style={{ fontSize: '12px' }}>
            {user.address.city}, {user.address.zipcode}
          </Text>
        </div>
        
        <div className="user-info-item">
          <BankOutlined />
          <Text ellipsis style={{ fontSize: '12px' }}>
            {user.company.name}
          </Text>
        </div>
      </div>

      <div className="user-actions">
        <button
          className={`action-btn ${isLiked ? 'liked' : ''}`}
          onClick={() => onToggleLike(user.id)}
        >
          {isLiked ? <HeartFilled /> : <HeartOutlined />}
          <span>{isLiked ? 'Liked' : 'Like'}</span>
        </button>

        <button
          className="action-btn"
          onClick={() => onEdit(user)}
        >
          <EditOutlined />
          <span>Edit</span>
        </button>

        <Popconfirm
          title="Delete user"
          description="Are you sure you want to delete this user?"
          onConfirm={() => onDelete(user.id)}
          okText="Yes"
          cancelText="No"
          placement="top"
        >
          <button className="action-btn">
            <DeleteOutlined />
            <span>Delete</span>
          </button>
        </Popconfirm>
      </div>
    </Card>
  );
};

export default UserCardAdvanced;