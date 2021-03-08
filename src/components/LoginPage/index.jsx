import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { useSelector } from "react-redux";
import localeReducer from "@redux/reducers/locale";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const LoginPage = () => {
    const locale = useSelector( state => state.localeReducer.locale.login_page );

    const onFinish = (values) => {
        console.log( 'Success:', values );
    };

    const onFinishFailed = (errorInfo) => {
        console.log( 'Failed:', errorInfo );
    };

    return (
        <Form
            { ...layout }
            name="basic"
            initialValues={ {
                remember: true,
            } }
            onFinish={ onFinish }
            onFinishFailed={ onFinishFailed }
        >
            <Form.Item
                label={locale.username_field}
                name="username"
                rules={ [
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ] }
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label={locale.password_field}
                name="password"
                rules={ [
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ] }
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item { ...tailLayout } name="remember" valuePropName="checked">
                <Checkbox>{ locale.remember_me_field }</Checkbox>
            </Form.Item>

            <Form.Item { ...tailLayout }>
                <Button type="primary" htmlType="submit">
                    { locale.submit }
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginPage;