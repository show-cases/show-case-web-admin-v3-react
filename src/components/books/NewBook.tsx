import React from 'react';
import styles from './NewBook.module.css';
import { Form, Input, Button } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import axios from 'axios';


export const NewBook : React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = async (values: any) => {
        console.log(values);

        try {
            await axios.post('https://httpbin.org/post', {
                'name': values.name,
                'description': values.description,
                'isbn': values.isbn
            });

            // clear the fields when creation was successful
            form.resetFields();
        } catch(error) {
            alert("Failed to create new books");
        }
    }

    const onFinishFailed = (err: ValidateErrorEntity<any>) => { 
        console.error(err);
    }

    const onReset = () => {
        form.resetFields();
    }

    return (
        <Form className={styles['form-center']}
            form={form}
            onFinish={onFinish} 
            onFinishFailed={onFinishFailed}>
            <Form.Item name="name" label="Name" rules={[{required: true, message: 'Book name cannot be empty'}]}>
                <Input />
            </Form.Item>
            <Form.Item name="isbn" label="ISBN">
                <Input />
            </Form.Item>
            <Form.Item name="description" 
                label="Description" 
                rules={[{required: true, message: "Description cannot be empty"}]}>
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
                <Button htmlType="button" onClick={onReset}>Reset</Button>
            </Form.Item>
        </Form>
    )
}
