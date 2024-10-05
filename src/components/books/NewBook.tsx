import React from 'react';
import styles from './NewBook.module.css';
import { Form, Input, Button } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';


export const NewBook : React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log(values);
    }

    const onFinishFailed = (err: ValidateErrorEntity<any>) => { 
        console.error(err);
    }

    const onReset = () => {
        form.resetFields();
    }

    return (<>
        <Form className={styles['form-center']}
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
    </>)
}
