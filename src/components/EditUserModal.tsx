import React, { useEffect } from 'react';
import { Modal, Form, Input, Row, Col, message } from 'antd';
import { User } from '../types/User';

interface EditUserModalProps {
  visible: boolean;
  user: User | null;
  onUpdate: (user: User) => void;
  onClose: () => void;
}

const EditUserModal: React.FC<EditUserModalProps> = ({
  visible,
  user,
  onUpdate,
  onClose
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (visible && user) {
      form.setFieldsValue({
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode,
        companyName: user.company.name
      });
    }
  }, [visible, user, form]);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      
      if (!user) return;

      const updatedUser: User = {
        ...user,
        name: values.name,
        username: values.username,
        email: values.email,
        phone: values.phone,
        website: values.website,
        address: {
          ...user.address,
          street: values.street,
          suite: values.suite,
          city: values.city,
          zipcode: values.zipcode
        },
        company: {
          ...user.company,
          name: values.companyName
        }
      };

      onUpdate(updatedUser);
    } catch (error) {
      message.error('Please fill in all required fields correctly.');
    }
  };

  const handleCancel = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title="Edit User Profile"
      open={visible}
      onOk={handleSubmit}
      onCancel={handleCancel}
      okText="Update"
      cancelText="Cancel"
      width={600}
      destroyOnClose
    >
      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: 'Please enter the full name' }]}
            >
              <Input placeholder="Enter full name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please enter the username' }]}
            >
              <Input placeholder="Enter username" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please enter the email' },
                { type: 'email', message: 'Please enter a valid email' }
              ]}
            >
              <Input placeholder="Enter email address" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: 'Please enter the phone number' }]}
            >
              <Input placeholder="Enter phone number" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Website"
          name="website"
          rules={[{ required: true, message: 'Please enter the website' }]}
        >
          <Input placeholder="Enter website URL" />
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Street"
              name="street"
              rules={[{ required: true, message: 'Please enter the street address' }]}
            >
              <Input placeholder="Enter street address" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Suite"
              name="suite"
              rules={[{ required: true, message: 'Please enter the suite' }]}
            >
              <Input placeholder="Enter suite/apartment" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="City"
              name="city"
              rules={[{ required: true, message: 'Please enter the city' }]}
            >
              <Input placeholder="Enter city" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Zip Code"
              name="zipcode"
              rules={[{ required: true, message: 'Please enter the zip code' }]}
            >
              <Input placeholder="Enter zip code" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Company Name"
          name="companyName"
          rules={[{ required: true, message: 'Please enter the company name' }]}
        >
          <Input placeholder="Enter company name" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditUserModal;