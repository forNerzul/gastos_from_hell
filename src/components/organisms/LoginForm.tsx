import { Button, Form, FormProps, Input } from "antd";

type LoginFields = {
    email: string;
    password: string;
};

interface LoginFormProps {
    onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    const onFinish: FormProps<LoginFields>["onFinish"] = (
        values: LoginFields
    ) => {
        onSubmit(values.email, values.password);
    };

    const onFinishFailed: FormProps<LoginFields>["onFinishFailed"] = (
        errorInfo: any
    ) => {
        console.log("Failed: ", errorInfo);
    };
    return (
        <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            style={{ maxWidth: "400px", width: 500 }}
        >
            <Form.Item
                name="email"
                label="Email"
                rules={[
                    {
                        required: true,
                        message: "Please input your email!",
                    },
                    {
                        type: "email",
                        message: "Please enter a valid email!",
                    },
                ]}
                hasFeedback
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: "Please input your password!",
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 25 }}>
                <Button type="primary" htmlType="submit" block>
                    Sign in
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
