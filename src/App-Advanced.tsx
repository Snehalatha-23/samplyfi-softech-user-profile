import React, { useState, useEffect } from 'react';
import { Row, Col, Typography, message, Button, Space } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import UserCardAdvanced from './components/UserCardAdvanced';
import EditUserModal from './components/EditUserModal';
import LoadingSpinnerAdvanced from './components/LoadingSpinnerAdvanced';
import { User } from './types/User';
import 'antd/dist/reset.css';
import './App.css';

const { Title, Paragraph } = Typography;

const AppAdvanced: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [likedUsers, setLikedUsers] = useState<Set<number>>(new Set());

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
      message.success('Users loaded successfully!');
    } catch (error) {
      console.error('Error fetching users:', error);
      message.error('Failed to load users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setModalVisible(true);
  };

  const handleUpdateUser = (updatedUser: User) => {
    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.id === updatedUser.id ? updatedUser : user
      )
    );
    setModalVisible(false);
    setEditingUser(null);
    message.success('User updated successfully!');
  };

  const handleDeleteUser = (userId: number) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    message.success('User deleted successfully!');
  };

  const handleToggleLike = (userId: number) => {
    setLikedUsers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(userId)) {
        newSet.delete(userId);
      } else {
        newSet.add(userId);
      }
      return newSet;
    });
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setEditingUser(null);
  };

  if (loading) {
    return <LoadingSpinnerAdvanced />;
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '24px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Title level={1} style={{ color: '#1890ff', marginBottom: '8px' }}>
            User Profiles Dashboard
          </Title>
          <Paragraph style={{ fontSize: '16px', color: '#666', marginBottom: '24px' }}>
            Assignment 2 - Advanced React Implementation with Ant Design
          </Paragraph>
          <Space>
            <Button 
              type="primary" 
              icon={<ReloadOutlined />} 
              onClick={fetchUsers}
              loading={loading}
            >
              Refresh Data
            </Button>
          </Space>
        </div>
        
        <Row gutter={[24, 24]}>
          {users.map((user) => (
            <Col 
              key={user.id} 
              xs={24} 
              sm={12} 
              md={8} 
              lg={6}
            >
              <UserCardAdvanced
                user={user}
                isLiked={likedUsers.has(user.id)}
                onEdit={handleEditUser}
                onDelete={handleDeleteUser}
                onToggleLike={handleToggleLike}
              />
            </Col>
          ))}
        </Row>

        <EditUserModal
          visible={modalVisible}
          user={editingUser}
          onUpdate={handleUpdateUser}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default AppAdvanced;