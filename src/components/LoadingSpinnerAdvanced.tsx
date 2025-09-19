import React from 'react';
import { Spin, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const LoadingSpinnerAdvanced: React.FC = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 48, color: '#1890ff' }} spin />;

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5'
      }}
    >
      <Spin indicator={antIcon} />
      <Title level={3} style={{ marginTop: '24px', color: '#1890ff' }}>
        Loading Users
      </Title>
      <Paragraph type="secondary">
        Please wait while we fetch the user data...
      </Paragraph>
    </div>
  );
};

export default LoadingSpinnerAdvanced;